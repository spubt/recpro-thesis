package de.ubt.ai4.petter.recpro.recpro_backend_lib.recpro.model.recommendation.execution.recommendationServiceInstance;

import de.ubt.ai4.petter.recpro.recpro_backend_lib.recpro.model.feedback.execution.FeedbackInstance;
import jakarta.persistence.DiscriminatorValue;
import jakarta.persistence.Entity;
import jakarta.persistence.ManyToMany;
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

@DiscriminatorValue("COLLABORATIVE")
public class CollaborativeRecommendationServiceInstance extends AbstractRecommendationServiceInstance{

    @ManyToMany()
    @Builder.Default
    List<FeedbackInstance> feedbackInstances = new ArrayList<>();

}
