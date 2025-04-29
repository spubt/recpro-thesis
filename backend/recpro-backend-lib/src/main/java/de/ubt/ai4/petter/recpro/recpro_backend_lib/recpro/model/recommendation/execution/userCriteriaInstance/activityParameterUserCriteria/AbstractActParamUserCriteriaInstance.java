package de.ubt.ai4.petter.recpro.recpro_backend_lib.recpro.model.recommendation.execution.userCriteriaInstance.activityParameterUserCriteria;

import com.fasterxml.jackson.annotation.JsonSubTypes;
import com.fasterxml.jackson.annotation.JsonTypeInfo;
import de.ubt.ai4.petter.recpro.recpro_backend_lib.recpro.model.ercData.activityParameter.ParameterType;
import de.ubt.ai4.petter.recpro.recpro_backend_lib.recpro.model.recommendation.execution.userCriteriaInstance.AbstractUserCriteriaInstance;
import de.ubt.ai4.petter.recpro.recpro_backend_lib.recpro.model.recommendation.modeling.userCriteria.activityParameterUserCriteria.*;
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
                value = ActParamDateUserCriteriaInstance.class,
                name = "DATE"
        ),@JsonSubTypes.Type(
        value = ActParamNumericUserCriteriaInstance.class,
        name = "NUMERIC"
), @JsonSubTypes.Type(
        value = ActParamTextualUserCriteriaInstance.class,
        name = "TEXTUAL"
), @JsonSubTypes.Type(
        value = ActParamBinaryUserCriteriaInstance.class,
        name = "BINARY"
)
})

@DiscriminatorValue("ACTIVITY_PARAMETER")
public class AbstractActParamUserCriteriaInstance extends AbstractUserCriteriaInstance {
    @ManyToOne
    private AbstractActParamUserCriteria userCriteria;

    @Enumerated(EnumType.STRING)
    private ParameterType parameterType;
}
