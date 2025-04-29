package de.ubt.ai4.petter.recpro.recpro_evaluation_framework.llm.service;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.fasterxml.jackson.databind.type.CollectionType;
import de.ubt.ai4.petter.recpro.recpro_backend_lib.recpro.model.bpm.execution.RecproTaskInstanceState;
import de.ubt.ai4.petter.recpro.recpro_backend_lib.recpro.model.bpm.execution.RecproTasklistEntry;
import de.ubt.ai4.petter.recpro.recpro_backend_lib.recpro.model.bpm.modeling.Activity;
import de.ubt.ai4.petter.recpro.recpro_backend_lib.recpro.model.bpm.modeling.Process;
import de.ubt.ai4.petter.recpro.recpro_backend_lib.recpro.model.ercData.activityParameter.execution.*;
import de.ubt.ai4.petter.recpro.recpro_backend_lib.recpro.model.feedback.execution.BinaryFeedbackInstance;
import de.ubt.ai4.petter.recpro.recpro_backend_lib.recpro.model.feedback.execution.FeedbackInstance;
import de.ubt.ai4.petter.recpro.recpro_backend_lib.recpro.model.feedback.execution.IntervalBasedFeedbackInstance;
import de.ubt.ai4.petter.recpro.recpro_backend_lib.recpro.model.feedback.execution.OrdinalFeedbackInstance;
import de.ubt.ai4.petter.recpro.recpro_backend_lib.recpro.model.recpro.modeling.activityParameter.ActivityParameterConfiguration;
import de.ubt.ai4.petter.recpro.recpro_backend_lib.recpro.model.recpro.modeling.enviornmentalParameter.EnvironmentalParameterConfiguration;
import de.ubt.ai4.petter.recpro.recpro_backend_lib.recpro.model.recpro.modeling.metaAttribute.MetaAttributeConfiguration;
import de.ubt.ai4.petter.recpro.recpro_backend_lib.recpro.model.user.modeling.User;
import de.ubt.ai4.petter.recpro.recpro_evaluation_framework.bpm.service.BpmEvaluationModelingService;
import de.ubt.ai4.petter.recpro.recpro_evaluation_framework.bpm.service.BpmEvaluationExecutionService;
import de.ubt.ai4.petter.recpro.recpro_evaluation_framework.ercData.service.*;
import de.ubt.ai4.petter.recpro.recpro_evaluation_framework.feedback.service.FeedbackEvaluationExecutionService;
import lombok.RequiredArgsConstructor;
import org.springframework.ai.chat.model.ChatModel;
import org.springframework.core.io.ClassPathResource;
import org.springframework.core.io.Resource;
import org.springframework.stereotype.Service;

import java.io.BufferedReader;
import java.io.InputStream;
import java.io.InputStreamReader;
import java.util.List;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
public class LLMService {

    private final ActivityParameterEvaluationModelingService activityParameterModelingService;
    private final ActivityParameterEvaluationExecutionService activityParameterExecutionService;
    private final MetaAttributeEvaluationExecutionService metaAttributeExecutionService;
    private final EnvironmentalParameterEvaluationModelingService environmentalParameterModelingService;
    private final EnvironmentalParameterEvaluationExecutionService environmentalParameterExecutionService;
    private final FeedbackEvaluationExecutionService feedbackService;
    private final BpmEvaluationExecutionService bpmService;
    private final BpmEvaluationModelingService bpmModelingService;
    private final ChatModel chatModel;

    public String fullRequest(RecproTasklistEntry entry, User user) {
        StringBuilder result = new StringBuilder();
        // Beschreibung des Nutzers (inkl. Vorlieben)
        result.append(user(user.getFirstName()+ "_" + user.getLastName() + ".txt"));
        result.append("\n\n");

        // Prozessbeschreibung (Aktivitäten und die zugehörigen Parameter / Attribute):
        result.append(processDescription());
        result.append("\n");

        // Beschreibung der möglichen Parameterwerte:
        result.append(activityParameterValues());
        result.append("\n\n");

        // Beschreibung der Prozessinstanz (um welche Art der Veranstaltung geht es?)
//        result.append(processInstance("event_1.txt"));
        result.append("\n\n");

        // Beschreibung der historie (inkl. Parameter)
        result.append(historicalTasks(entry));
        result.append("\n\n");

        // Beschreibung der aktuellen Aufgabe
        result.append(currentTasklistEntry(entry));
        result.append("\n\n");
        // Holen der Informationen!
        result.append(request());

        return result.toString();
    }

    public String processDescription() {
        String processKey = "Veranstaltungsplanung";

        Process process = bpmModelingService.getProcess(processKey);


        StringBuilder result = new StringBuilder();
        result.append("Der Prozess \"").append(processKey).append("\" hat folgende Aktivitäten mit den entsprechenden Metaattributen und Aktivitätsparametern:");

        process.getProcessModel().getActivities().forEach(activity -> {
            result.append("\n");
            result.append(this.activityDescription(activity));
        });

        return result.toString();
    }

    public String activityParameterValues() {
        StringBuilder result = new StringBuilder();
        result.append("Mögliche Werte für die einzelnen Aktivitätsparameter sind folgende:");
        ObjectMapper objectMapper = new ObjectMapper();
        CollectionType listType = objectMapper.getTypeFactory().constructCollectionType(List.class, String.class);

        activityParameterModelingService.getAllActivityParameters().forEach(param -> {

            result.append("\n");
            result.append(param.getLabel());
            result.append(" (").append(param.getId()).append(") ");
            try {
                List<String> values = objectMapper.readValue(new ClassPathResource("example/data/ercData/activityParameters/" + param.getId() + ".json").getInputStream(), listType);
                values.forEach(value -> result.append("\t").append(value));
            } catch (Exception e) {
                return;
            }
        });
        return result.toString();
    }

    private String activityDescription(Activity activity) {
        StringBuilder result = new StringBuilder();
        List<ActivityParameterConfiguration> activityParameters = activityParameterExecutionService.getActivityParametersByActivity(activity);
        List<MetaAttributeConfiguration> metaAttributes = metaAttributeExecutionService.getMetaAttributesByActivity(activity);
        List<EnvironmentalParameterConfiguration> environmentalParameters = environmentalParameterExecutionService.getEnvironmentalParametersByActivity(activity);
        result.append(activity.getId());

        metaAttributes.forEach(attr -> result.append("\t").append(attr.getMetaAttribute().getId()));
        activityParameters.forEach(param -> result.append("\t").append(param.getParameter().getId()));
        environmentalParameters.forEach(param -> result.append("\t").append(param.getParameter().getId()));
        return result.toString();
    }

    public String processInstance(String processInstance) {
        return this.getFromClasspath("example/data/bpm/" + processInstance);
    }

    public String user(String user) {
        return this.getFromClasspath("example/data/user/" + user);
    }

    private String getFromClasspath(String path) {
        Resource resource = new ClassPathResource(path);
        try (InputStream inputStream = resource.getInputStream()){
            BufferedReader reader = new BufferedReader(new InputStreamReader(inputStream));
            return reader.lines().collect(Collectors.joining("\n"));
        } catch (Exception e) {
            return "";
        }
    }

    private String historicalTasks(RecproTasklistEntry e) {
        StringBuilder result = new StringBuilder();

        result.append("Die folgenden Aufgaben wurden bisher in dieser Prozessinstanz ausgeführt: ");

        List<RecproTasklistEntry> entries = bpmService.getByProcessId(e.getRecproTaskInstance().getRecproProcessInstance().getId());

        entries.forEach(entry -> {
            if (entry.getRecproTaskInstance().getState() == RecproTaskInstanceState.COMPLETED) {
                result.append("\n\nAktivität: ").append(entry.getRecproTaskInstance().getActivity().getId());
                result.append("\nAktivitätsparameter: ");
                entry.getActivityParameterInstances().forEach(param -> result.append("\n").append(param.getActivityParameter().getId()).append("\t").append(getActivityParameterInstanceValue(param)));

                // GET FEEDBACK:
                FeedbackInstance feedbackInstance = feedbackService.getByTasklistEntryId(entry.getId());
                if (feedbackInstance != null) {
                    result.append("\nFeedback: ").append(getFeedbackInstanceValue(feedbackInstance));
                    result.append("\nNutzer: ").append(feedbackInstance.getUser().getFirstName()).append(" ").append(feedbackInstance.getUser().getLastName());
                }
            }
        });

        return result.toString();
    }

    private String getActivityParameterInstanceValue(AbstractActivityParameterInstance instance) {
        return switch (instance.getParameterType()) {
            case NUMERIC -> Double.toString(((NumericActivityParameterInstance) instance).getValue());
            case TEXTUAL -> ((TextualActivityParameterInstance) instance).getValue();
            case DATE -> ((DateActivityParameterInstance) instance).getValue().toString();
            case BINARY -> ((BinaryActivityParameterInstance) instance).getValue().toString();
            default -> "";
        };
    }

    private String getFeedbackInstanceValue(FeedbackInstance instance) {
        return switch (instance.getFeedbackType()) {
            case BINARY -> ((BinaryFeedbackInstance) instance).getValue().toString();
            case INTERVAL_BASED -> Double.toString(((IntervalBasedFeedbackInstance) instance).getValue());
            case ORDINAL -> Double.toString(((OrdinalFeedbackInstance) instance).getValue().getValue());
            default -> "";
        };
    }

    public String currentTasklistEntry(RecproTasklistEntry entry) {
        StringBuilder result = new StringBuilder();

        result.append("Die Aufgabe, die du ausführen sollst ist folgende: ");
        result.append("\n");
//        result.append("Aktivität: \t").append(entry.getRecproTaskInstance().getActivity().getId());
//        result.append("\nAktivitätsparameter:");
//        entry.getActivityParameterInstances().forEach(param -> result.append("\t").append(param.getActivityParameter().getId()));
        result.append("\nAktivität: ").append(entry.getRecproTaskInstance().getActivity().getId());
        result.append("\nAktivitätsparameter: ");
        entry.getActivityParameterInstances().forEach(param -> result.append("\n").append(param.getActivityParameter().getId()).append("\t").append(getActivityParameterInstanceValue(param)));


        return result.toString();
    }

    public String request() {
        return this.getFromClasspath("example/data/request.txt");
    }

    public Double getRating(String request) {
        return Double.parseDouble(chatModel.call(request));
    }
}
