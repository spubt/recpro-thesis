package de.ubt.ai4.petter.recpro.recpro_evaluation_framework.configuration.service;

import de.ubt.ai4.petter.recpro.recpro_evaluation_framework.bpm.service.BpmEvaluationExecutionService;
import de.ubt.ai4.petter.recpro.recpro_evaluation_framework.ercData.service.ActivityParameterEvaluationModelingService;
import de.ubt.ai4.petter.recpro.recpro_evaluation_framework.ercData.service.EnvironmentalParameterEvaluationModelingService;
import de.ubt.ai4.petter.recpro.recpro_evaluation_framework.ercData.service.MetaAttributeEvaluationModelingService;
import de.ubt.ai4.petter.recpro.recpro_evaluation_framework.feedback.service.FeedbackEvaluationModelingService;
import de.ubt.ai4.petter.recpro.recpro_evaluation_framework.recommendation.service.DimensionEvaluationModelingService;
import de.ubt.ai4.petter.recpro.recpro_evaluation_framework.recommendation.service.RecommendationServiceEvaluationModelingService;
import de.ubt.ai4.petter.recpro.recpro_evaluation_framework.user.service.UserEvaluationModelingService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class ConfigurationService {

    private final BpmEvaluationExecutionService bpmExecutionService;
    private final FeedbackEvaluationModelingService feedbackModelingService;
    private final MetaAttributeEvaluationModelingService metaAttributeModelingService;
    private final ActivityParameterEvaluationModelingService activityParameterModelingService;
    private final EnvironmentalParameterEvaluationModelingService environmentalParameterModelingService;
    private final UserEvaluationModelingService userModelingService;
    private final DimensionEvaluationModelingService dimensionModelingService;
    private final RecommendationServiceEvaluationModelingService recommendationModelingService;

    public void createProcess() {
        this.bpmExecutionService.createProcess();
    }

    public void createFeedback() {
        feedbackModelingService.createFeedback();
    }

    public void createMetaAttributes() {
        metaAttributeModelingService.createMetaAttributes();
    }

    public void assignMetaAttributes() {
        metaAttributeModelingService.assignMetaAttributes();
    }

    public void createActivityParameters() {
        activityParameterModelingService.createActivityParameters();
    }

    public void assignActivityParameters() {
        activityParameterModelingService.assignActivityParameters();
    }

    public void createEnvironmentalParameters() {
        environmentalParameterModelingService.createEnvironmentalParameters();
    }

    public void assignEnvironmentalParameters() {
        environmentalParameterModelingService.assignEnvironmentalParameters();
    }

    public void createUsers() {
        userModelingService.createUsers();
    }

    public void createDimensions() {
        dimensionModelingService.createDimensions();
    }

    public void createRecommendationServices() {
        recommendationModelingService.createRecommendationServices();
    }

    public void initialize() {
        this.createProcess();
        this.createMetaAttributes();
        this.assignMetaAttributes();
        this.createEnvironmentalParameters();
        this.assignEnvironmentalParameters();
        this.createActivityParameters();
        this.assignActivityParameters();

        this.createFeedback();
        this.createUsers();

        this.createDimensions();
        this.createRecommendationServices();
    }

}
