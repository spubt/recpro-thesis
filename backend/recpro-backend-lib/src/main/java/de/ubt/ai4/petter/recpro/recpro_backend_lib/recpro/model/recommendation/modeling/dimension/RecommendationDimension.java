package de.ubt.ai4.petter.recpro.recpro_backend_lib.recpro.model.recommendation.modeling.dimension;

import com.fasterxml.jackson.annotation.JsonSubTypes;
import com.fasterxml.jackson.annotation.JsonTypeInfo;
import de.ubt.ai4.petter.recpro.recpro_backend_lib.recpro.model.ercData.activityParameter.ParameterType;
import de.ubt.ai4.petter.recpro.recpro_backend_lib.recpro.model.recommendation.modeling.range.RecommendationDimensionRange;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.experimental.SuperBuilder;

import java.util.List;
import java.util.UUID;

@Entity
@Data
@SuperBuilder
@AllArgsConstructor
@NoArgsConstructor

@JsonTypeInfo(
        use = JsonTypeInfo.Id.NAME,
        property = "dimensionType",
        visible = true
)
@JsonSubTypes({@JsonSubTypes.Type(
        value = ActivityParameterRecommendationDimension.class,
        name = "ACTIVITY_PARAMETER"
), @JsonSubTypes.Type(
        value = EnvironmentalParameterRecommendationDimension.class,
        name = "ENVIRONMENTAL_PARAMETER"
)})
public class RecommendationDimension {
    @Id
    @Builder.Default
    private String id = UUID.randomUUID().toString();

    private String label;

    @OneToMany(cascade = CascadeType.ALL, orphanRemoval = true)
    private List<RecommendationDimensionRange> ranges;

    @Enumerated(EnumType.STRING)
    @Builder.Default
    private RecommendationDimensionType dimensionType = RecommendationDimensionType.ENVIRONMENTAL_PARAMETER;

    @Enumerated(EnumType.STRING)
    @Builder.Default
    private ParameterType parameterType = ParameterType.TEXTUAL;
}
