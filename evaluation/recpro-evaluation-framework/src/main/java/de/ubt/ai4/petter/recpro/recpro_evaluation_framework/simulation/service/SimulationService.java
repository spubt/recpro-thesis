package de.ubt.ai4.petter.recpro.recpro_evaluation_framework.simulation.service;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.fasterxml.jackson.databind.type.CollectionType;
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
import de.ubt.ai4.petter.recpro.recpro_backend_lib.recpro.model.recommendation.modeling.recommendationServiceModel.RecommendationServiceModel;
import de.ubt.ai4.petter.recpro.recpro_backend_lib.recpro.model.user.modeling.User;
import de.ubt.ai4.petter.recpro.recpro_evaluation_framework.bpm.service.BpmEvaluationExecutionService;
import de.ubt.ai4.petter.recpro.recpro_evaluation_framework.ercData.service.ActivityParameterEvaluationExecutionService;
import de.ubt.ai4.petter.recpro.recpro_evaluation_framework.ercData.service.EnvironmentalParameterEvaluationExecutionService;
import de.ubt.ai4.petter.recpro.recpro_evaluation_framework.feedback.service.FeedbackEvaluationExecutionService;
import de.ubt.ai4.petter.recpro.recpro_evaluation_framework.feedback.service.FeedbackEvaluationModelingService;
import de.ubt.ai4.petter.recpro.recpro_evaluation_framework.generation.model.EvaluationFeedbackData;
import de.ubt.ai4.petter.recpro.recpro_evaluation_framework.recommendation.service.RecommendationServiceEvaluationExecutionService;
import de.ubt.ai4.petter.recpro.recpro_evaluation_framework.recommendation.service.RecommendationServiceEvaluationModelingService;
import de.ubt.ai4.petter.recpro.recpro_evaluation_framework.simulation.model.SimulationType;
import de.ubt.ai4.petter.recpro.recpro_evaluation_framework.user.service.UserEvaluationExecutionService;
import lombok.RequiredArgsConstructor;
import org.springframework.core.io.ClassPathResource;
import org.springframework.stereotype.Service;

import java.time.Instant;
import java.util.List;
import java.util.Objects;
import java.util.Optional;
import java.util.concurrent.ThreadLocalRandom;

@Service
@RequiredArgsConstructor
public class SimulationService {

    private final BpmEvaluationExecutionService bpmExecutionService;
    private final FeedbackEvaluationModelingService feedbackModelingService;
    private final FeedbackEvaluationExecutionService feedbackExecutionService;
    private final ActivityParameterEvaluationExecutionService activityParameterExecutionService;
    private final UserEvaluationExecutionService userExecutionService;
    private final RecommendationServiceEvaluationModelingService recommendationServiceModelingService;
    private final RecommendationServiceEvaluationExecutionService recommendationExecutionService;
    private final EnvironmentalParameterEvaluationExecutionService environmentalParameterExecutionService;

    public void runSimulation(SimulationType simulationType) {
//        String[] mails = new String[10];
//        mails[0] = "alexander.berger@recpro.com.de";
////        mails[1] = "fabian.muller@recpro.com.de";
////        mails[2] = "max.mustermann@recpro.com.de";
//        mails[3] = "julia.fischer@recpro.com.de";
//        mails[4] = "katharina.schneider@recpro.com.de";
////        mails[5] = "laura.beckmann@recpro.com.de";
//        mails[6] = "lisa.baumann@recpro.com.de";
////        mails[7] = "marie.sonnenschein@recpro.com.de";
//        mails[8] = "markus.lehmann@recpro.com.de";
////        mails[9] = "nobby.nic@recpro.com.de";

        //        User[] users = new User[10];
//        users[0] = this.userExecutionService.login(mails[0]);
//        users[1] = this.userExecutionService.login(mails[1]);
//        users[2] = this.userExecutionService.login(mails[2]);
//        users[3] = this.userExecutionService.login(mails[3]);
//        users[4] = this.userExecutionService.login(mails[4]);
//        users[5] = this.userExecutionService.login(mails[5]);
//        users[6] = this.userExecutionService.login(mails[6]);
//        users[7] = this.userExecutionService.login(mails[7]);
//        users[8] = this.userExecutionService.login(mails[8]);
//        users[9] = this.userExecutionService.login(mails[9]);

        String[] mails = new String[5];
        mails[0] = "alexander.berger@recpro.com.de";
        mails[1] = "julia.fischer@recpro.com.de";
        mails[2] = "katharina.schneider@recpro.com.de";
        mails[3] = "lisa.baumann@recpro.com.de";
        mails[4] = "markus.lehmann@recpro.com.de";



        User[] users = new User[5];
        users[0] = this.userExecutionService.login(mails[0]);
        users[1] = this.userExecutionService.login(mails[1]);
        users[2] = this.userExecutionService.login(mails[2]);
        users[3] = this.userExecutionService.login(mails[3]);
        users[4] = this.userExecutionService.login(mails[4]);

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

        for (String event : events) {
            bpmExecutionService.startProcess("Veranstaltungsplanung", "sebastian.petter@uni-bayreuth.de", event);
        }

        int index = 0;

        RecommendationServiceModel recommendationService = new RecommendationServiceModel();
        List<RecommendationServiceModel> recommendationServiceModels = this.recommendationServiceModelingService.getRecommendationServiceModels();
        switch (simulationType) {
            case CONTENT_BASED -> {
                recommendationService = recommendationServiceModels.stream().filter(rsm -> rsm.getId().equals("CONTENT_BASED")).findFirst().get();
            }
        }

        while (true) {
            int randomUser  = ThreadLocalRandom.current().nextInt(0, 3);
            User currentUser = users[index];
            RecproTasklist tasklist = this.bpmExecutionService.getRecproTasklist(currentUser.getId());
            if (!tasklist.getEntries().isEmpty()) {
                RecproTasklistEntry entry = tasklist.getEntries().getFirst();
                Optional<RecproTasklistEntry> first = tasklist.getEntries().stream()
                        .filter(e -> e.getPosition() == 1)
                        .findFirst();
                if (first.isPresent()) {
                    entry = first.get();
                }
                switch (simulationType) {
                    case RANDOM_TASK -> {
                        int randomEntry  = ThreadLocalRandom.current().nextInt(0, tasklist.getEntries().size());
                        entry = tasklist.getEntries().get(randomEntry);
                    }
                    case CONTENT_BASED -> {
                        tasklist = recommendationExecutionService.initialize(recommendationService, currentUser.getId());
                        tasklist = recommendationExecutionService.applyRecommendation(tasklist);
                        first = tasklist.getEntries().stream()
                                .filter(e -> e.getPosition() == 1)
                                .findFirst();
                        if (first.isPresent()) {
                            entry = first.get();
                        }
                    }
                }


                this.simulate(currentUser, tasklist, entry);
                index = (index + 1) % users.length;
            } else {
                break;
            }
        }

        feedbackExecutionService.saveFeedbackToFile("feedback/" + simulationType.name() + ".json");
//        for (String mail: mails) {
//            System.out.println(feedbackExecutionService.getAverageRating(simulationType,  mail));
//        }
    }

    public void simulate(User user, RecproTasklist tasklist, RecproTasklistEntry entry) {
        entry.getActivityParameterInstances().forEach(actParam -> {
            Object value = Objects.requireNonNull(activityParameterExecutionService.fillParameters(entry.getRecproTaskInstance().getActivity().getId(), actParam.getActivityParameter().getId(), entry.getRecproTaskInstance().getRecproProcessInstance().getDescription()));
            switch (actParam.getParameterType()) {
                case TEXTUAL -> ((TextualActivityParameterInstance) actParam).setValue(value.toString());
                case BINARY ->  ((BinaryActivityParameterInstance) actParam).setValue((Boolean) value);
                case NUMERIC -> ((NumericActivityParameterInstance) actParam).setValue(Double.parseDouble(value.toString()));
                case DATE -> ((DateActivityParameterInstance) actParam).setValue(Instant.parse(value.toString()));
            }
        });
        entry.getEnvironmentalParameterInstances().forEach(envParam -> {
            System.out.println(envParam.getId());
            Object value = Objects.requireNonNull(environmentalParameterExecutionService.fillParameters(entry.getRecproTaskInstance().getActivity().getId(), envParam.getEnvironmentalParameter().getId(), entry.getRecproTaskInstance().getRecproProcessInstance().getDescription()));
            switch (envParam.getParameterType()) {
                case TEXTUAL -> ((TextualEnvironmentalParameterInstance) envParam).setValue(value.toString());
                case BINARY ->  ((BinaryEnvironmentalParameterInstance) envParam).setValue((Boolean) value);
                case NUMERIC -> ((NumericEnvironmentalParameterInstance) envParam).setValue(Double.parseDouble(value.toString()));
                case DATE -> ((DateEnvironmentalParameterInstance) envParam).setValue(Instant.parse(value.toString()));
            }
        });
        RecproTasklistEntry completedTasklistEntry = this.bpmExecutionService.complete(entry, user.getId(), tasklist);
        Feedback activeFeedback = this.feedbackModelingService.getActiveFeedback();
        double rating = this.getRating(entry, user);
        FeedbackInstance feedbackInstance = this.feedbackExecutionService.createFeedbackInstance(activeFeedback, completedTasklistEntry, user, rating);
        this.feedbackExecutionService.saveFeedbackInstance(feedbackInstance);
    }

    private double getRating(RecproTasklistEntry recproTasklistEntry, User user) {

        ObjectMapper mapper = new ObjectMapper();
        CollectionType listType = mapper.getTypeFactory().constructCollectionType(List.class, EvaluationFeedbackData.class);

        try {
            List<EvaluationFeedbackData> feedbackData = mapper.readValue(new ClassPathResource("data/evaluation/feedback/base_old.json").getInputStream(), listType);
            Optional<EvaluationFeedbackData> data = feedbackData.stream().filter(efd ->
                    efd.getActivityId().equals(recproTasklistEntry.getRecproTaskInstance().getActivity().getId())
                            && efd.getMail().equals(user.getEmail())
                            && efd.getEvent().equals(recproTasklistEntry.getRecproTaskInstance().getRecproProcessInstance().getDescription())).findFirst();
            return data.map(EvaluationFeedbackData::getRating).orElse(0.0);
        } catch (Exception e) {
            e.printStackTrace();
            return 0;
        }
    }
}
