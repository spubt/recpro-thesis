package de.ubt.ai4.petter.recpro.recpro_backend_lib.recpro.model.recommendation.analysis;

import de.ubt.ai4.petter.recpro.recpro_backend_lib.recpro.model.feedback.modeling.Feedback;
import de.ubt.ai4.petter.recpro.recpro_backend_lib.recpro.model.recommendation.modeling.recommendationServiceModel.RecommendationServiceModel;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Transient;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;
import java.util.UUID;

@Entity
@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class RecommendationAnalysis {

    @Id
    @Builder.Default
    private String id = UUID.randomUUID().toString();
    private String label;
    private String description;

    @ManyToOne
    private RecommendationServiceModel recommendationService;

    @ManyToOne
    private Feedback feedback;

    @Transient
    private List<Double> data;
}
