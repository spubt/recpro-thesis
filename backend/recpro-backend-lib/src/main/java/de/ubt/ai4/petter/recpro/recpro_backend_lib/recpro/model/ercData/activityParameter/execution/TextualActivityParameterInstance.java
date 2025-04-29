package de.ubt.ai4.petter.recpro.recpro_backend_lib.recpro.model.ercData.activityParameter.execution;

import jakarta.persistence.DiscriminatorValue;
import jakarta.persistence.Entity;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.experimental.SuperBuilder;

import java.util.Objects;

@Entity
@Data
@SuperBuilder
@AllArgsConstructor
@NoArgsConstructor

@DiscriminatorValue("TEXTUAL")
public class TextualActivityParameterInstance extends AbstractActivityParameterInstance {
    private String value;

    @Override
    public boolean equals(Object o) {
        if (!super.equals(o)) return false;
        TextualActivityParameterInstance that = (TextualActivityParameterInstance) o;
        return value.equals(that.value);
    }

    @Override
    public int hashCode() {
        return Objects.hash(super.hashCode(), value);
    }
}
