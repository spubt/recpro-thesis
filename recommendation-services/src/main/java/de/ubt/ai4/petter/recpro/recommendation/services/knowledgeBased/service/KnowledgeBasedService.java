package de.ubt.ai4.petter.recpro.recommendation.services.knowledgeBased.service;

import de.ubt.ai4.petter.recpro.recpro_backend_lib.recpro.model.bpm.execution.RecproTasklist;
import de.ubt.ai4.petter.recpro.recpro_backend_lib.recpro.model.recommendation.execution.recommendationServiceInstance.KnowledgeBasedRecommendationServiceInstance;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class KnowledgeBasedService {

    public RecproTasklist initialize(KnowledgeBasedRecommendationServiceInstance recommendationServiceInstance) {
        return new RecproTasklist();
    }

    public RecproTasklist applyRecommendation(KnowledgeBasedRecommendationServiceInstance recommendationServiceInstance) {
        return new RecproTasklist();
    }
}
