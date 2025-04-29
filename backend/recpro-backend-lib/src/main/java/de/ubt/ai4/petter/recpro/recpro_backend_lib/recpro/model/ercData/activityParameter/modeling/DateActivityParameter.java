package de.ubt.ai4.petter.recpro.recpro_backend_lib.recpro.model.ercData.activityParameter.modeling;

import jakarta.persistence.DiscriminatorValue;
import jakarta.persistence.Entity;
import lombok.*;

import java.time.Instant;

@EqualsAndHashCode(callSuper = true)
@Entity
@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder

@DiscriminatorValue("DATE")
public class DateActivityParameter extends AbstractActivityParameter {
    private Instant defaultValue = Instant.now();
}
