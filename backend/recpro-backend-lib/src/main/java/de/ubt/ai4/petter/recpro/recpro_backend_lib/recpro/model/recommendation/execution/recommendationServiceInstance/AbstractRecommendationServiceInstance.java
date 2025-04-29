package de.ubt.ai4.petter.recpro.recpro_backend_lib.recpro.model.recommendation.execution.recommendationServiceInstance;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.annotation.JsonSubTypes;
import com.fasterxml.jackson.annotation.JsonTypeInfo;
import de.ubt.ai4.petter.recpro.recpro_backend_lib.recpro.model.bpm.execution.RecproTasklist;
import de.ubt.ai4.petter.recpro.recpro_backend_lib.recpro.model.recommendation.modeling.recommendationServiceModel.RecommendationServiceModel;
import de.ubt.ai4.petter.recpro.recpro_backend_lib.recpro.model.recommendation.modeling.recommendationServiceModel.RecommendationServiceModelType;
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
        property = "recommendationServiceType",
        visible = true
)

@JsonSubTypes({
        @JsonSubTypes.Type(
                value = ContentBasedRecommendationServiceInstance.class,
                name = "CONTENT_BASED"
        ), @JsonSubTypes.Type(
            value = CollaborativeRecommendationServiceInstance.class,
            name = "COLLABORATIVE"
        ),@JsonSubTypes.Type(
            value = KnowledgeBasedRecommendationServiceInstance.class,
            name = "KNOWLEDGE_BASED"
        ),
})
public abstract class AbstractRecommendationServiceInstance {
    @Id
    @Builder.Default
    private String id = UUID.randomUUID().toString();

    @ManyToOne
    private RecommendationServiceModel recommendationService;

    @Enumerated(EnumType.STRING)
    @Builder.Default
    private RecommendationServiceModelType recommendationServiceType = RecommendationServiceModelType.BASE;

    @OneToOne
    @JsonIgnoreProperties("recommendationServiceInstance")
    private RecproTasklist tasklist;
}
