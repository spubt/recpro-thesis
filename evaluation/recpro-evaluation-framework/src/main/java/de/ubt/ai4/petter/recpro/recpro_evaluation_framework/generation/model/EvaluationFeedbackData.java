package de.ubt.ai4.petter.recpro.recpro_evaluation_framework.generation.model;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.Instant;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor

public class EvaluationFeedbackData {

    private String mail;
    private String activityId;
    private String event;
    private double rating;
    private Instant timestamp;
    private double potentialRating;

}
