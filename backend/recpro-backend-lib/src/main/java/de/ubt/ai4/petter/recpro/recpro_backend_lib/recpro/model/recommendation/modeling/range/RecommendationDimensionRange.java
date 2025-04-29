package de.ubt.ai4.petter.recpro.recpro_backend_lib.recpro.model.recommendation.modeling.range;

import com.fasterxml.jackson.annotation.JsonSubTypes;
import com.fasterxml.jackson.annotation.JsonTypeInfo;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.experimental.SuperBuilder;

import java.util.UUID;

@Entity
@Data
@SuperBuilder
@AllArgsConstructor
@NoArgsConstructor

@Inheritance(strategy = InheritanceType.JOINED)

@JsonTypeInfo(
        use = JsonTypeInfo.Id.NAME,
        property = "rangeType",
        visible = true
)
@JsonSubTypes({@JsonSubTypes.Type(
        value = DateRecommendationDimensionRange.class,
        name = "DATE"
), @JsonSubTypes.Type(
        value = NumericRecommendationDimensionRange.class,
        name = "NUMERIC"
), @JsonSubTypes.Type(
        value = TextualRecommendationDimensionRange.class,
        name = "TEXTUAL"
)})
public class RecommendationDimensionRange {
    @Id
    @Builder.Default
    private String id = UUID.randomUUID().toString();

    private String label;

    @Enumerated(EnumType.STRING)
    @Builder.Default
    private RecommendationDimensionRangeType rangeType = RecommendationDimensionRangeType.TEXTUAL;
}
