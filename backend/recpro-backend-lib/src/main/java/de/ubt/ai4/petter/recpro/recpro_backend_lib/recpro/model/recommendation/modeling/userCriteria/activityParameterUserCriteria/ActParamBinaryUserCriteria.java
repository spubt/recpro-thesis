package de.ubt.ai4.petter.recpro.recpro_backend_lib.recpro.model.recommendation.modeling.userCriteria.activityParameterUserCriteria;

import jakarta.persistence.DiscriminatorValue;
import jakarta.persistence.Entity;
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

@DiscriminatorValue("BINARY")
public class ActParamBinaryUserCriteria extends AbstractActParamUserCriteria {
    private boolean value;
}
