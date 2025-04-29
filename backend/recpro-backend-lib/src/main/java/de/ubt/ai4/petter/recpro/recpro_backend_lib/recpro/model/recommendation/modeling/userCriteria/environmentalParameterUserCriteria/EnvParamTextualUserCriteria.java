package de.ubt.ai4.petter.recpro.recpro_backend_lib.recpro.model.recommendation.modeling.userCriteria.environmentalParameterUserCriteria;

import jakarta.persistence.DiscriminatorValue;
import jakarta.persistence.ElementCollection;
import jakarta.persistence.Entity;
import lombok.*;
import lombok.experimental.SuperBuilder;

import java.util.ArrayList;
import java.util.List;

@EqualsAndHashCode(callSuper = true)
@Entity
@Data
@SuperBuilder
@NoArgsConstructor
@AllArgsConstructor

@DiscriminatorValue("TEXTUAL")
public class EnvParamTextualUserCriteria extends AbstractEnvParamUserCriteria {

    @ElementCollection
    @Builder.Default
    private List<String> textValues = new ArrayList<>();
}
