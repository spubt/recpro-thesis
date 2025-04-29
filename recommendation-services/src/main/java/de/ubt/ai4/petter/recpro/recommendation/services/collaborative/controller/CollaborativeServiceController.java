package de.ubt.ai4.petter.recpro.recommendation.services.collaborative.controller;

import de.ubt.ai4.petter.recpro.recommendation.services.collaborative.service.CollaborativeService;
import de.ubt.ai4.petter.recpro.recpro_backend_lib.recpro.model.bpm.execution.RecproTasklist;
import de.ubt.ai4.petter.recpro.recpro_backend_lib.recpro.model.recommendation.execution.recommendationServiceInstance.CollaborativeRecommendationServiceInstance;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RequiredArgsConstructor
@RestController
@RequestMapping("recommendation/collaborative")
public class CollaborativeServiceController {
    private final CollaborativeService collaborativeService;

    @PostMapping("/applyRecommendation")
    public RecproTasklist applyRecommendation(@RequestBody CollaborativeRecommendationServiceInstance recommendationServiceInstance) {
        return collaborativeService.applyRecommendations(recommendationServiceInstance);
    }

}
