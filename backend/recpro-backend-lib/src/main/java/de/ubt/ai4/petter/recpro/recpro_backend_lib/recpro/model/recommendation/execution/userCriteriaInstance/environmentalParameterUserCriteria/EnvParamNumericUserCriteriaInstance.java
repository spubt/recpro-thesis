package de.ubt.ai4.petter.recpro.recpro_backend_lib.recpro.model.recommendation.execution.userCriteriaInstance.environmentalParameterUserCriteria;

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

@DiscriminatorValue("NUMERIC")
public class EnvParamNumericUserCriteriaInstance extends AbstractEnvParamUserCriteriaInstance{
    private double value;
}
