package de.ubt.ai4.petter.recpro.recpro_backend_lib.recpro.model.explanation.execution.model;

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
@Data
@SuperBuilder
@NoArgsConstructor
@AllArgsConstructor
@Inheritance(strategy = InheritanceType.JOINED)

@JsonTypeInfo(
        use = JsonTypeInfo.Id.NAME,
        property = "explanationType",
        visible = true
)

@JsonSubTypes({
        @JsonSubTypes.Type(
                value = PotentialFeedbackExplanationInstance.class,
                name = "POTENTIAL_FEEDBACK"
        )
})
public class AbstractExplanationInstance {
    @Id
    @Builder.Default
    private String id = UUID.randomUUID().toString();

    @Enumerated(EnumType.STRING)
    private ExplanationType explanationType;
}
