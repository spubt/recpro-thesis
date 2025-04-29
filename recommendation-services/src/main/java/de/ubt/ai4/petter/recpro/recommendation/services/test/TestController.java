package de.ubt.ai4.petter.recpro.recommendation.services.test;

import de.ubt.ai4.petter.recpro.recpro_backend_lib.recpro.model.bpm.execution.RecproTasklist;
import de.ubt.ai4.petter.recpro.recpro_backend_lib.recpro.model.recommendation.execution.recommendationServiceInstance.ContentBasedRecommendationServiceInstance;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("test")
@RequiredArgsConstructor
public class TestController {

    @PostMapping("applyRecommendation")
    public RecproTasklist test(@RequestBody ContentBasedRecommendationServiceInstance instance) {
        instance.getFeedbackInstances().forEach(feedback -> instance.getFeedbackInstances().forEach(target -> {
            System.out.println(feedback.getTasklistEntry().getRecproTaskInstance().getActivity().getName() + " " + target.getTasklistEntry().getRecproTaskInstance().getActivity().getName());
            boolean equals = feedback.getTasklistEntry().equals(target.getTasklistEntry());

            System.out.println(equals);
        }));
        return instance.getTasklist();
    }
}
