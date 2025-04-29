package de.ubt.ai4.petter.recpro.recpro_backend_lib.recpro.model.recommendation.modeling.dimension;

import de.ubt.ai4.petter.recpro.recpro_backend_lib.recpro.model.ercData.activityParameter.modeling.AbstractActivityParameter;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.EqualsAndHashCode;
import lombok.NoArgsConstructor;
import lombok.experimental.SuperBuilder;

@SuperBuilder
@AllArgsConstructor
@NoArgsConstructor
@Data
@EqualsAndHashCode(callSuper = true)
@Entity

@DiscriminatorValue("ACTIVITY_PARAMETER")
public class ActivityParameterRecommendationDimension extends RecommendationDimension {

    @ManyToOne
    private AbstractActivityParameter activityParameter;
}
