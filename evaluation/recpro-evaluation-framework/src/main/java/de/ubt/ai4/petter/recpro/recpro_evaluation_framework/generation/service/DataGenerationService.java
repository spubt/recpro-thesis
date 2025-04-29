package de.ubt.ai4.petter.recpro.recpro_evaluation_framework.generation.service;

import de.ubt.ai4.petter.recpro.recpro_backend_lib.recpro.model.bpm.execution.RecproTasklist;
import de.ubt.ai4.petter.recpro.recpro_backend_lib.recpro.model.bpm.execution.RecproTasklistEntry;
import de.ubt.ai4.petter.recpro.recpro_backend_lib.recpro.model.ercData.activityParameter.execution.BinaryActivityParameterInstance;
import de.ubt.ai4.petter.recpro.recpro_backend_lib.recpro.model.ercData.activityParameter.execution.DateActivityParameterInstance;
import de.ubt.ai4.petter.recpro.recpro_backend_lib.recpro.model.ercData.activityParameter.execution.NumericActivityParameterInstance;
import de.ubt.ai4.petter.recpro.recpro_backend_lib.recpro.model.ercData.activityParameter.execution.TextualActivityParameterInstance;
import de.ubt.ai4.petter.recpro.recpro_backend_lib.recpro.model.ercData.environmentalParameter.execution.BinaryEnvironmentalParameterInstance;
import de.ubt.ai4.petter.recpro.recpro_backend_lib.recpro.model.ercData.environmentalParameter.execution.DateEnvironmentalParameterInstance;
import de.ubt.ai4.petter.recpro.recpro_backend_lib.recpro.model.ercData.environmentalParameter.execution.NumericEnvironmentalParameterInstance;
import de.ubt.ai4.petter.recpro.recpro_backend_lib.recpro.model.ercData.environmentalParameter.execution.TextualEnvironmentalParameterInstance;
import de.ubt.ai4.petter.recpro.recpro_backend_lib.recpro.model.feedback.execution.FeedbackInstance;
import de.ubt.ai4.petter.recpro.recpro_backend_lib.recpro.model.feedback.modeling.Feedback;
import de.ubt.ai4.petter.recpro.recpro_backend_lib.recpro.model.user.modeling.User;
import de.ubt.ai4.petter.recpro.recpro_evaluation_framework.bpm.service.BpmEvaluationExecutionService;
import de.ubt.ai4.petter.recpro.recpro_evaluation_framework.ercData.service.ActivityParameterEvaluationExecutionService;
import de.ubt.ai4.petter.recpro.recpro_evaluation_framework.ercData.service.EnvironmentalParameterEvaluationExecutionService;
import de.ubt.ai4.petter.recpro.recpro_evaluation_framework.feedback.service.FeedbackEvaluationExecutionService;
import de.ubt.ai4.petter.recpro.recpro_evaluation_framework.feedback.service.FeedbackEvaluationModelingService;
import de.ubt.ai4.petter.recpro.recpro_evaluation_framework.llm.service.LLMService;
import de.ubt.ai4.petter.recpro.recpro_evaluation_framework.user.service.UserEvaluationExecutionService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.time.Instant;
import java.util.Objects;
import java.util.concurrent.ThreadLocalRandom;
import java.util.concurrent.TimeUnit;

@Service
@RequiredArgsConstructor
public class DataGenerationService {

    private final ActivityParameterEvaluationExecutionService activityParameterExecutionService;
    private final LLMService llmService;
    private final BpmEvaluationExecutionService bpmExecutionService;
    private final FeedbackEvaluationModelingService feedbackModelingService;
    private final FeedbackEvaluationExecutionService feedbackExecutionService;
    private final UserEvaluationExecutionService userExecutionService;
    private final EnvironmentalParameterEvaluationExecutionService environmentalParameterExecutionService;

    public void test() {
        String[] mails = new String[10];
        mails[0] = "alexander.berger@recpro.com.de";
        mails[1] = "fabian.muller@recpro.com.de";
        mails[2] = "max.mustermann@recpro.com.de";
        mails[3] = "julia.fischer@recpro.com.de";
        mails[4] = "katharina.schneider@recpro.com.de";
        mails[5] = "laura.beckmann@recpro.com.de";
        mails[6] = "lisa.baumann@recpro.com.de";
        mails[7] = "marie.sonnenschein@recpro.com.de";
        mails[8] = "markus.lehmann@recpro.com.de";
        mails[9] = "nobby.nic@recpro.com.de";

        String[] events = new String[15];
        events[0] = "Bildung";
        events[1] = "DigitaleTransformation";
        events[2] = "ExecutiveCircle";
        events[3] = "HealthcareSymposium";
        events[4] = "Innovationsforum";
        events[5] = "Karrieremesse";
        events[6] = "KreativWorkshop";
        events[7] = "Kulturfestival";
        events[8] = "Mobilitätskongress";
        events[9] = "Nachhaltigkeitsforum";
        events[10] = "Networking";
        events[11] = "StartupBreakfast";
        events[12] = "StartupDay";
        events[13] = "TechExpo";
        events[14] = "TechNetworking";

        for (String mail : mails) {
            for (String event : events) {
                System.out.println(mail + ": " + event);
                this.executeNew(mail, event, "Veranstaltungsplanung");
            }
        }
    }

    public void executeNext(String email) {
        User u = this.userExecutionService.login(email);
        RecproTasklist tasklist = this.bpmExecutionService.getRecproTasklist(u.getId());
        this.execute(u, tasklist);
    }

    public void executeAll(String email) {
        User u = this.userExecutionService.login(email);
        while (true) {
            RecproTasklist tasklist = this.bpmExecutionService.getRecproTasklist(u.getId());

            if (!tasklist.getEntries().isEmpty()) {
                this.execute(u, tasklist);
            } else {
                break;
            }
        }
    }

    public void executeNew(String email, String event, String processKey) {
        this.bpmExecutionService.startProcess(processKey, email, event);
        this.executeAll(email);
    }

    public void execute(User u, RecproTasklist tasklist) {
        RecproTasklistEntry first = tasklist.getEntries().getFirst();

        first.getActivityParameterInstances().forEach(actParam -> {
//            System.out.println(actParam.getId());
            Object value = Objects.requireNonNull(activityParameterExecutionService.fillParameters(first.getRecproTaskInstance().getActivity().getId(), actParam.getActivityParameter().getId(), first.getRecproTaskInstance().getRecproProcessInstance().getDescription()));
            switch (actParam.getParameterType()) {
                case TEXTUAL -> ((TextualActivityParameterInstance) actParam).setValue(value.toString());
                case BINARY ->  ((BinaryActivityParameterInstance) actParam).setValue((Boolean) value);
                case NUMERIC -> ((NumericActivityParameterInstance) actParam).setValue(Double.parseDouble(value.toString()));
                case DATE -> ((DateActivityParameterInstance) actParam).setValue(Instant.parse(value.toString()));
            }
        });

        first.getEnvironmentalParameterInstances().forEach(envParam -> {
           System.out.println(envParam.getId());
            Object value = Objects.requireNonNull(environmentalParameterExecutionService.fillParameters(first.getRecproTaskInstance().getActivity().getId(), envParam.getEnvironmentalParameter().getId(), first.getRecproTaskInstance().getRecproProcessInstance().getDescription()));
            switch (envParam.getParameterType()) {
                case TEXTUAL -> ((TextualEnvironmentalParameterInstance) envParam).setValue(value.toString());
                case BINARY ->  ((BinaryEnvironmentalParameterInstance) envParam).setValue((Boolean) value);
                case NUMERIC -> ((NumericEnvironmentalParameterInstance) envParam).setValue(Double.parseDouble(value.toString()));
                case DATE -> ((DateEnvironmentalParameterInstance) envParam).setValue(Instant.parse(value.toString()));
            }
        });

        String request = llmService.fullRequest(first, u);
//        System.out.println(request);

        RecproTasklistEntry completedTasklistEntry = this.bpmExecutionService.complete(first, u.getId(), tasklist);

        Feedback activeFeedback = this.feedbackModelingService.getActiveFeedback();

        try {
            TimeUnit.SECONDS.sleep(5);
            double rating = llmService.getRating(request);
//        double rating = ThreadLocalRandom.current().nextInt(1, 10);
            FeedbackInstance feedbackInstance = this.feedbackExecutionService.createFeedbackInstance(activeFeedback, completedTasklistEntry, u, rating);
            this.feedbackExecutionService.saveFeedbackInstance(feedbackInstance);
        } catch (Exception e) {
            e.printStackTrace();
        }

    }
}
