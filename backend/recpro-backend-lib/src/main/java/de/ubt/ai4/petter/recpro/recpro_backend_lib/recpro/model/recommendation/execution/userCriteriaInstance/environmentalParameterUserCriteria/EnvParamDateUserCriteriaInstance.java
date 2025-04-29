package de.ubt.ai4.petter.recpro.recpro_backend_lib.recpro.model.recommendation.execution.userCriteriaInstance.environmentalParameterUserCriteria;

import jakarta.persistence.DiscriminatorValue;
import jakarta.persistence.Entity;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.EqualsAndHashCode;
import lombok.NoArgsConstructor;
import lombok.experimental.SuperBuilder;

import java.time.Instant;

@EqualsAndHashCode(callSuper = true)
@Entity
@Data
@SuperBuilder
@NoArgsConstructor
@AllArgsConstructor

@DiscriminatorValue("DATE")
public class EnvParamDateUserCriteriaInstance extends AbstractEnvParamUserCriteriaInstance{

    private Instant value;
}
