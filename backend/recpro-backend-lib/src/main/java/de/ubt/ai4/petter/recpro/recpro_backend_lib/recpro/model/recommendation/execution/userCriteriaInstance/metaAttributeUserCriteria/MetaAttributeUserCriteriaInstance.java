package de.ubt.ai4.petter.recpro.recpro_backend_lib.recpro.model.recommendation.execution.userCriteriaInstance.metaAttributeUserCriteria;


import de.ubt.ai4.petter.recpro.recpro_backend_lib.recpro.model.recommendation.execution.userCriteriaInstance.AbstractUserCriteriaInstance;
import de.ubt.ai4.petter.recpro.recpro_backend_lib.recpro.model.recommendation.modeling.userCriteria.metaAttributeUserCriteria.MetaAttributeUserCriteria;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.EqualsAndHashCode;
import lombok.NoArgsConstructor;
import lombok.experimental.SuperBuilder;

@EqualsAndHashCode(callSuper = true)
@Entity
@Data
@SuperBuilder
@NoArgsConstructor
@AllArgsConstructor
@Inheritance(strategy = InheritanceType.JOINED)

@DiscriminatorValue("META_ATTRIBUTE")
public class MetaAttributeUserCriteriaInstance extends AbstractUserCriteriaInstance {
    @ManyToOne
    private MetaAttributeUserCriteria userCriteria;
}
