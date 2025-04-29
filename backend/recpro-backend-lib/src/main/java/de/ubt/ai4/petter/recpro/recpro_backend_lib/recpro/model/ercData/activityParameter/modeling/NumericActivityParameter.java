package de.ubt.ai4.petter.recpro.recpro_backend_lib.recpro.model.ercData.activityParameter.modeling;

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
public class NumericActivityParameter extends AbstractActivityParameter {
    private double defaultValue = 0.0;
    private double minValue = 0.0;
    private double maxValue = 0.0;
}
