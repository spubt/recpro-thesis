package de.ubt.ai4.petter.recpro.recpro_backend_lib.recpro.model.feedback.execution;

import de.ubt.ai4.petter.recpro.recpro_backend_lib.recpro.model.feedback.modeling.FeedbackType;
import jakarta.persistence.DiscriminatorValue;
import jakarta.persistence.Entity;
import jakarta.persistence.EnumType;
import jakarta.persistence.Enumerated;
import lombok.*;
import lombok.experimental.SuperBuilder;

@Entity
@AllArgsConstructor
@NoArgsConstructor
@DiscriminatorValue("INTERVAL_BASED")
@EqualsAndHashCode(callSuper = true)
@Data
@SuperBuilder
public class IntervalBasedFeedbackInstance extends FeedbackInstance {
    @Enumerated(EnumType.STRING)
    @Builder.Default
    private FeedbackType feedbackType = FeedbackType.INTERVAL_BASED;
    private double value;
}
