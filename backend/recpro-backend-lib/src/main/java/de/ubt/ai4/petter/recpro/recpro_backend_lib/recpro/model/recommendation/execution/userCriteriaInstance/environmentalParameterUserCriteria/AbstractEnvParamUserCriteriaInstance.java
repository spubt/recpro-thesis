package de.ubt.ai4.petter.recpro.recpro_backend_lib.recpro.model.recommendation.execution.userCriteriaInstance.environmentalParameterUserCriteria;

import com.fasterxml.jackson.annotation.JsonSubTypes;
import com.fasterxml.jackson.annotation.JsonTypeInfo;
import de.ubt.ai4.petter.recpro.recpro_backend_lib.recpro.model.ercData.activityParameter.ParameterType;
import de.ubt.ai4.petter.recpro.recpro_backend_lib.recpro.model.recommendation.execution.userCriteriaInstance.AbstractUserCriteriaInstance;
import de.ubt.ai4.petter.recpro.recpro_backend_lib.recpro.model.recommendation.execution.userCriteriaInstance.activityParameterUserCriteria.ActParamBinaryUserCriteriaInstance;
import de.ubt.ai4.petter.recpro.recpro_backend_lib.recpro.model.recommendation.execution.userCriteriaInstance.activityParameterUserCriteria.ActParamDateUserCriteriaInstance;
import de.ubt.ai4.petter.recpro.recpro_backend_lib.recpro.model.recommendation.execution.userCriteriaInstance.activityParameterUserCriteria.ActParamNumericUserCriteriaInstance;
import de.ubt.ai4.petter.recpro.recpro_backend_lib.recpro.model.recommendation.execution.userCriteriaInstance.activityParameterUserCriteria.ActParamTextualUserCriteriaInstance;
import de.ubt.ai4.petter.recpro.recpro_backend_lib.recpro.model.recommendation.modeling.userCriteria.environmentalParameterUserCriteria.AbstractEnvParamUserCriteria;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.EqualsAndHashCode;
import lombok.NoArgsConstructor;
import lombok.experimental.SuperBuilder;

@EqualsAndHashCode(callSuper = true)
@Entity
@Data
@SuperBuilder
@NoArgsConstructor
@AllArgsConstructor
@Inheritance(strategy = InheritanceType.JOINED)

@JsonTypeInfo(
        use = JsonTypeInfo.Id.NAME,
        property = "parameterType",
        visible = true
)

@JsonSubTypes({
        @JsonSubTypes.Type(
                value = EnvParamDateUserCriteriaInstance.class,
                name = "DATE"
        ),@JsonSubTypes.Type(
        value = EnvParamNumericUserCriteriaInstance.class,
        name = "NUMERIC"
), @JsonSubTypes.Type(
        value = EnvParamTextualUserCriteriaInstance.class,
        name = "TEXTUAL"
), @JsonSubTypes.Type(
        value = EnvParamBinaryUserCriteriaInstance.class,
        name = "BINARY"
)
})

@DiscriminatorValue("ENVIRONMENTAL_PARAMETER")
public class AbstractEnvParamUserCriteriaInstance extends AbstractUserCriteriaInstance {
    @ManyToOne
    private AbstractEnvParamUserCriteria userCriteria;

    @Enumerated(EnumType.STRING)
    private ParameterType parameterType;
}
