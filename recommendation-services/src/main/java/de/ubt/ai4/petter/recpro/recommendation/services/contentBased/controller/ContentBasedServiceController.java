package de.ubt.ai4.petter.recpro.recommendation.services.contentBased.controller;

import de.ubt.ai4.petter.recpro.recommendation.services.contentBased.service.ContentBasedService;
import de.ubt.ai4.petter.recpro.recpro_backend_lib.recpro.model.bpm.execution.RecproTasklist;
import de.ubt.ai4.petter.recpro.recpro_backend_lib.recpro.model.recommendation.execution.recommendationServiceInstance.ContentBasedRecommendationServiceInstance;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RequiredArgsConstructor
@RestController
@RequestMapping("recommendation/content-based")
public class ContentBasedServiceController {

    private final ContentBasedService service;

    @PostMapping("/applyRecommendation")
    public RecproTasklist applyRecommendation(@RequestBody ContentBasedRecommendationServiceInstance recommendationServiceInstance) {
        return service.applyRecommendation(recommendationServiceInstance);
    }

}
