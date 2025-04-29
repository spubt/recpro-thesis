package de.ubt.ai4.petter.recpro.recpro_backend_lib.recpro.model.explanation.execution.model;

import jakarta.persistence.DiscriminatorValue;
import jakarta.persistence.Entity;
import lombok.*;
import lombok.experimental.SuperBuilder;

@EqualsAndHashCode(callSuper = true)
@Entity
@Data
@AllArgsConstructor
@NoArgsConstructor
@SuperBuilder

@DiscriminatorValue("POTENTIAL_FEEDBACK")
public class PotentialFeedbackExplanationInstance extends AbstractExplanationInstance {

    private double potentialValue;

    @Override
    public ExplanationType getExplanationType() {
        return ExplanationType.POTENTIAL_FEEDBACK;
    }

}
