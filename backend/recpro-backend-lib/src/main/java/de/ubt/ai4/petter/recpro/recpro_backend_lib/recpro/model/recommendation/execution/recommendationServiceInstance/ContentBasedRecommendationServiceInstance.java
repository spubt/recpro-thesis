package de.ubt.ai4.petter.recpro.recpro_backend_lib.recpro.model.recommendation.execution.recommendationServiceInstance;

import de.ubt.ai4.petter.recpro.recpro_backend_lib.recpro.model.ercData.metaAttribute.modeling.MetaAttribute;
import de.ubt.ai4.petter.recpro.recpro_backend_lib.recpro.model.feedback.execution.FeedbackInstance;
import de.ubt.ai4.petter.recpro.recpro_backend_lib.recpro.model.recpro.modeling.metaAttribute.MetaAttributeConfiguration;
import jakarta.persistence.*;
import lombok.*;
import lombok.experimental.SuperBuilder;
import java.util.List;

@EqualsAndHashCode(callSuper = true)
@Entity
@Data
@SuperBuilder
@AllArgsConstructor
@NoArgsConstructor

@DiscriminatorValue("CONTENT_BASED")
public class ContentBasedRecommendationServiceInstance extends AbstractRecommendationServiceInstance{

    @ManyToMany()
    @JoinTable(
            name = "recpro_cbrsi_feedback_instances",
            joinColumns = @JoinColumn(name = "cbrsi_id"),
            inverseJoinColumns = @JoinColumn(name = "feedback_instance_id")
    )
    List<FeedbackInstance> feedbackInstances;

    @ManyToMany
            @JoinTable(
                    name = "recpro_cbrsi_meta_attribute_configurations",
                    joinColumns = @JoinColumn(name = "cbrsi_id"),
                    inverseJoinColumns = @JoinColumn(name = "meta_attribute_configuration_id")
            )
    List<MetaAttributeConfiguration> metaAttributeConfigurations;

    @ManyToMany
    @JoinTable(
            name = "recpro_cbrsi_meta_attributes",
            joinColumns = @JoinColumn(name = "cbrsi_id"),
            inverseJoinColumns = @JoinColumn(name = "meta_attribute_id")
    )
    List<MetaAttribute> metaAttributes;

}
