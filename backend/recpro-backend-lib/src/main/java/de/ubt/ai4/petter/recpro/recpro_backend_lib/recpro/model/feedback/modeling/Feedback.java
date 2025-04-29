package de.ubt.ai4.petter.recpro.recpro_backend_lib.recpro.model.feedback.modeling;


import com.fasterxml.jackson.annotation.JsonSubTypes;
import com.fasterxml.jackson.annotation.JsonTypeInfo;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.experimental.SuperBuilder;

import java.util.UUID;

@Entity
@Inheritance(strategy = InheritanceType.JOINED)
@Data
@SuperBuilder
@AllArgsConstructor
@NoArgsConstructor

@JsonTypeInfo(
        use = JsonTypeInfo.Id.NAME,
        property = "feedbackType",
        visible = true
)
@JsonSubTypes({@JsonSubTypes.Type(
        value = BinaryFeedback.class,
        name = "BINARY"
), @JsonSubTypes.Type(
        value = IntervalBasedFeedback.class,
        name = "INTERVAL_BASED"
), @JsonSubTypes.Type(
        value = OrdinalFeedback.class,
        name = "ORDINAL"
)})
public class Feedback {

    @Id
    @Builder.Default
    private String id = UUID.randomUUID().toString();

    private String label;
    private String description;

    @Enumerated(EnumType.STRING)
    private FeedbackType feedbackType;

    @Builder.Default
    private boolean active = false;

    @Enumerated(EnumType.STRING)
    private FeedbackLabelType labelType;
}
