package de.ubt.ai4.petter.recpro.recpro_backend_lib.recpro.model.feedback.execution;

import com.fasterxml.jackson.annotation.JsonSubTypes;
import com.fasterxml.jackson.annotation.JsonTypeInfo;

import de.ubt.ai4.petter.recpro.recpro_backend_lib.recpro.model.bpm.execution.RecproTasklistEntry;
import de.ubt.ai4.petter.recpro.recpro_backend_lib.recpro.model.feedback.modeling.Feedback;
import de.ubt.ai4.petter.recpro.recpro_backend_lib.recpro.model.feedback.modeling.FeedbackType;
import de.ubt.ai4.petter.recpro.recpro_backend_lib.recpro.model.user.modeling.User;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.experimental.SuperBuilder;
import org.hibernate.annotations.Cascade;
import org.hibernate.annotations.CascadeType;

import java.time.Instant;
import java.util.UUID;

@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
@SuperBuilder

@JsonTypeInfo(
        use = JsonTypeInfo.Id.NAME,
        property = "feedbackType",
        visible = true
)
@JsonSubTypes({@JsonSubTypes.Type(
        value = BinaryFeedbackInstance.class,
        name = "BINARY"
), @JsonSubTypes.Type(
        value = IntervalBasedFeedbackInstance.class,
        name = "INTERVAL_BASED"
), @JsonSubTypes.Type(
        value = OrdinalFeedbackInstance.class,
        name = "ORDINAL"
)})
@Inheritance(
        strategy = InheritanceType.JOINED
)
public class FeedbackInstance {

    @Id
    @Builder.Default
    private String id = UUID.randomUUID().toString();

    @ManyToOne
    @Cascade(CascadeType.ALL)
    private User user;

    @OneToOne
    private RecproTasklistEntry tasklistEntry;

    @ManyToOne
    private Feedback feedback;

    @Enumerated(EnumType.STRING)
    private FeedbackType feedbackType;
    @Builder.Default
    private Instant timestamp = Instant.now();
}
