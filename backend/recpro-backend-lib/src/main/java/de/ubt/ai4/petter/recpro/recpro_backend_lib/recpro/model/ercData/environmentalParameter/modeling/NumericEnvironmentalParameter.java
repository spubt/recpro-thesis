package de.ubt.ai4.petter.recpro.recpro_backend_lib.recpro.model.ercData.environmentalParameter.modeling;

import jakarta.persistence.DiscriminatorValue;
import jakarta.persistence.Entity;
import lombok.*;

@EqualsAndHashCode(callSuper = true)
@Entity
@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder

@DiscriminatorValue("NUMERIC")
public class NumericEnvironmentalParameter extends AbstractEnvironmentalParameter {

    private double defaultValue;

}
