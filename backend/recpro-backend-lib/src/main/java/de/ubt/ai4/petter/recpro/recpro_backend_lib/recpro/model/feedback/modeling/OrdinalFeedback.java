package de.ubt.ai4.petter.recpro.recpro_backend_lib.recpro.model.feedback.modeling;

import jakarta.persistence.CascadeType;
import jakarta.persistence.DiscriminatorValue;
import jakarta.persistence.Entity;
import jakarta.persistence.OneToMany;
import lombok.*;
import lombok.experimental.SuperBuilder;

import java.util.ArrayList;
import java.util.List;

@EqualsAndHashCode(callSuper = true)
@Entity
@Data
@SuperBuilder
@AllArgsConstructor
@NoArgsConstructor

@DiscriminatorValue("ORDINAL")
public class OrdinalFeedback extends Feedback {

    private int defaultValue;

    @OneToMany(cascade = CascadeType.ALL)
    @Builder.Default
    private List<OrdinalOption> options = new ArrayList<>();
}
