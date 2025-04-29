package de.ubt.ai4.petter.recpro.recpro_backend_lib.recpro.model.feedback.execution;


import de.ubt.ai4.petter.recpro.recpro_backend_lib.recpro.model.feedback.modeling.FeedbackType;
import de.ubt.ai4.petter.recpro.recpro_backend_lib.recpro.model.feedback.modeling.OrdinalOption;
import jakarta.persistence.*;
import lombok.*;
import lombok.experimental.SuperBuilder;

@Entity
@AllArgsConstructor
@NoArgsConstructor
@DiscriminatorValue("ORDINAL")
@EqualsAndHashCode(callSuper = true)
@Data
@SuperBuilder
public class OrdinalFeedbackInstance extends FeedbackInstance {
    @Enumerated(EnumType.STRING)
    @Builder.Default
    private FeedbackType feedbackType = FeedbackType.ORDINAL;

    @ManyToOne
    private OrdinalOption value;
}
