package de.ubt.ai4.petter.recpro.recpro_backend_lib.recpro.model.bpm.execution;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.annotation.JsonManagedReference;
import de.ubt.ai4.petter.recpro.recpro_backend_lib.recpro.model.recommendation.execution.recommendationServiceInstance.AbstractRecommendationServiceInstance;
import de.ubt.ai4.petter.recpro.recpro_backend_lib.recpro.model.recommendation.modeling.recommendationServiceModel.RecommendationServiceModel;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.hibernate.annotations.Cascade;
import org.hibernate.annotations.CascadeType;

import java.time.Instant;
import java.util.ArrayList;
import java.util.List;
import java.util.UUID;

@Entity
@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class    RecproTasklist {
    @Id
    @Builder.Default
    private String id = UUID.randomUUID().toString();
    private String userId;

    @OneToMany()
    @JsonManagedReference
    @Cascade(CascadeType.ALL)
    private List<RecproTasklistEntry> entries = new ArrayList<>();

    @OneToOne(mappedBy = "tasklist")
    @JsonIgnoreProperties("tasklist")
    @Cascade(CascadeType.ALL)
    private AbstractRecommendationServiceInstance recommendationServiceInstance;

    @ManyToOne()
    private RecommendationServiceModel recommendationServiceModel;

    private Instant createdAt = Instant.now();
}
