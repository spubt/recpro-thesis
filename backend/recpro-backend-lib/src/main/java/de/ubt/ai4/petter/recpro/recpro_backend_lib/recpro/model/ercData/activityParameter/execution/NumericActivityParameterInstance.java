package de.ubt.ai4.petter.recpro.recpro_backend_lib.recpro.model.ercData.activityParameter.execution;

import jakarta.persistence.DiscriminatorValue;
import jakarta.persistence.Entity;
import lombok.*;
import lombok.experimental.SuperBuilder;

import java.util.Objects;

@Entity
@Data
@AllArgsConstructor
@NoArgsConstructor
@SuperBuilder

@DiscriminatorValue("NUMERIC")
public class NumericActivityParameterInstance extends AbstractActivityParameterInstance {
    private double value;

    @Override
    public boolean equals(Object o) {
        if (!super.equals(o)) return false;
        NumericActivityParameterInstance that = (NumericActivityParameterInstance) o;
        return Double.compare(value, that.value) == 0;
    }

    @Override
    public int hashCode() {
        return Objects.hash(super.hashCode(), value);
    }
}
