package de.ubt.ai4.petter.recpro.recommendation.services.knowledgeBased.controller;

import de.ubt.ai4.petter.recpro.recommendation.services.knowledgeBased.service.KnowledgeBasedService;
import de.ubt.ai4.petter.recpro.recpro_backend_lib.recpro.model.bpm.execution.RecproTasklist;
import de.ubt.ai4.petter.recpro.recpro_backend_lib.recpro.model.recommendation.execution.recommendationServiceInstance.KnowledgeBasedRecommendationServiceInstance;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RequiredArgsConstructor
@RestController
@RequestMapping("recommendation/knowledge-based")
public class KnowledgeBasedServiceController {

    private final KnowledgeBasedService knowledgeBasedService;

    @PostMapping("/initialize")
    public RecproTasklist initialize(@RequestBody KnowledgeBasedRecommendationServiceInstance recommendationServiceInstance) {
        return knowledgeBasedService.initialize(recommendationServiceInstance);
    }

    @PostMapping("/applyRecommendation")
    public RecproTasklist applyRecommendation(@RequestBody KnowledgeBasedRecommendationServiceInstance recommendationServiceInstance) {
        return knowledgeBasedService.applyRecommendation(recommendationServiceInstance);
    }

}
