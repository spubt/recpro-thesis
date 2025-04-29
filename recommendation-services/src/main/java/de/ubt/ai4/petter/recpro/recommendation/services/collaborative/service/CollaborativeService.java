package de.ubt.ai4.petter.recpro.recommendation.services.collaborative.service;

import de.ubt.ai4.petter.recpro.recpro_backend_lib.recpro.model.bpm.execution.RecproTasklist;
import de.ubt.ai4.petter.recpro.recpro_backend_lib.recpro.model.recommendation.execution.recommendationServiceInstance.CollaborativeRecommendationServiceInstance;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class CollaborativeService {

    public RecproTasklist applyRecommendations(CollaborativeRecommendationServiceInstance recommendationServiceInstance) {
        return new RecproTasklist();
    }

}
