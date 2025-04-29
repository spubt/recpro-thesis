package de.ubt.ai4.petter.recpro.recpro_backend_lib.recpro.model.recommendation.modeling.range;

import jakarta.persistence.DiscriminatorValue;
import jakarta.persistence.Entity;
import lombok.*;
import lombok.experimental.SuperBuilder;

import java.time.Instant;

@EqualsAndHashCode(callSuper = true)
@Entity
@Data
@SuperBuilder
@AllArgsConstructor
@NoArgsConstructor

@DiscriminatorValue("DATE")
public class DateRecommendationDimensionRange extends RecommendationDimensionRange {
    @Builder.Default
    private Instant lowerBound = Instant.now();
    @Builder.Default
    private Instant upperBound = Instant.now();
}
