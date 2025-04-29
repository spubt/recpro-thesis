package de.ubt.ai4.petter.recpro.recpro_backend_lib.recpro.model.recommendation.modeling.recommendationServiceModel;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.UUID;

@Entity
@Data
@Service
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class RecommendationServiceModel {
    @Id
    @Builder.Default
    private String id = UUID.randomUUID().toString();

    private String name;
    private String description;
    private String url;

    @Enumerated(EnumType.STRING)
    @Builder.Default
    private RecommendationServiceModelType recommendationType = RecommendationServiceModelType.BASE;

    @OneToMany(cascade = CascadeType.ALL, orphanRemoval = true)
    @Builder.Default
    private List<RecommendationServiceModelDimension> dimensions = new ArrayList<>();
}
