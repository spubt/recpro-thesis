package de.ubt.ai4.petter.recpro.recpro_backend_lib.recpro.model.feedback.modeling;

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
@AllArgsConstructor
@NoArgsConstructor

@DiscriminatorValue("INTERVAL_BASED")
public class IntervalBasedFeedback extends Feedback {
    private double minValue;
    private double maxValue;
    private double stepSize;
    private double defaultValue;
}
