package de.ubt.ai4.petter.recpro.recpro_evaluation_framework.recommendation.service;

import de.ubt.ai4.petter.recpro.recpro_backend_lib.recpro.model.bpm.execution.RecproTasklist;
import de.ubt.ai4.petter.recpro.recpro_backend_lib.recpro.model.recommendation.modeling.recommendationServiceModel.RecommendationServiceModel;
import de.ubt.ai4.petter.recpro.recpro_evaluation_framework.util.api.ApiService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;


import static de.ubt.ai4.petter.recpro.recpro_evaluation_framework.util.api.ApiConstants.*;

@Service
@RequiredArgsConstructor
public class RecommendationServiceEvaluationExecutionService {

    private final ApiService apiService;

    public RecproTasklist initialize(RecommendationServiceModel recommendationService, String userId) {
        return apiService.getRestClient().post().uri(RECOMMENDATION_EXECUTION + INITIALIZE).header(USER_ID, userId).body(recommendationService).retrieve().body(RecproTasklist.class);
    }

    public RecproTasklist applyRecommendation(RecproTasklist recproTasklist) {
        return apiService.getRestClient().post().uri(RECOMMENDATION_EXECUTION + APPLY_RECOMMENDATION).body(recproTasklist).retrieve().body(RecproTasklist.class);
    }
}
