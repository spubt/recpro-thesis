package de.ubt.ai4.petter.recpro.recpro_evaluation_framework.feedback.controller;

import de.ubt.ai4.petter.recpro.recpro_evaluation_framework.feedback.service.FeedbackEvaluationExecutionService;
import de.ubt.ai4.petter.recpro.recpro_evaluation_framework.simulation.model.SimulationType;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("feedback")
@RequiredArgsConstructor
public class FeedbackController {

    private final FeedbackEvaluationExecutionService feedbackService;

    @GetMapping("/saveAsJson")
    public void saveAsJson(@RequestParam SimulationType simulationType) {
        this.feedbackService.saveFeedbackToFile("feedback/" + simulationType.name() + ".json");
    }

    @GetMapping("/averageFeedback")
    public double averageFeedback(@RequestParam SimulationType simulationType, @RequestParam String mail) {
        return feedbackService.getAverageRating(simulationType, mail);
    }

    @GetMapping("/averageFeedback/{path}")
    public double averageFeedbackPath(@PathVariable String path, @RequestParam String mail) {
        return feedbackService.getAverageRating(path, mail);
    }

    @GetMapping("/averageFeedbacks")
    public String averageFeedbacks(@RequestParam SimulationType simulationType) {
        return feedbackService.getAverageRatings("feedback/" + simulationType.name() + ".json");
    }

    @GetMapping("exportToCsv")
    public void exportToCsv(@RequestParam SimulationType simulationType) {
        feedbackService.exportRatingsToCsv("feedback/" + simulationType.name() + ".json", "csv/" + simulationType.name() + ".csv");
    }

    @GetMapping("exportToCsvLine")
    public void exportToCsvLine(@RequestParam SimulationType simulationType) {
        feedbackService.exportRatingsToCsvForLineDiagram("feedback/" + simulationType.name() + ".json", "csv/" + simulationType.name() + ".csv");
    }
}
