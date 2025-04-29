package de.ubt.ai4.petter.recpro.recpro_backend_lib.recpro.model.ercData.activityParameter.execution;

import jakarta.persistence.DiscriminatorValue;
import jakarta.persistence.Entity;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.experimental.SuperBuilder;

import java.time.Instant;
import java.util.Objects;

@Entity
@Data
@AllArgsConstructor
@NoArgsConstructor
@SuperBuilder

@DiscriminatorValue("DATE")
public class DateActivityParameterInstance extends AbstractActivityParameterInstance {
    private Instant value;

    @Override
    public boolean equals(Object o) {
        if (!super.equals(o)) return false;
        DateActivityParameterInstance that = (DateActivityParameterInstance) o;
        return value.equals(that.value);
    }

    @Override
    public int hashCode() {
        return Objects.hash(super.hashCode(), value);
    }
}
