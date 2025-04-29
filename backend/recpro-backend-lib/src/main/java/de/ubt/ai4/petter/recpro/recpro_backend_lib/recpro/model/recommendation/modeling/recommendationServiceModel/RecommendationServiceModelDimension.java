package de.ubt.ai4.petter.recpro.recpro_backend_lib.recpro.model.recommendation.modeling.recommendationServiceModel;

import de.ubt.ai4.petter.recpro.recpro_backend_lib.recpro.model.recommendation.modeling.dimension.RecommendationDimension;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.UUID;

@Entity
@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class RecommendationServiceModelDimension {
    @Id
    private String id = UUID.randomUUID().toString();

    @ManyToOne
    private RecommendationDimension recommendationDimension;
    private double weight;
}
