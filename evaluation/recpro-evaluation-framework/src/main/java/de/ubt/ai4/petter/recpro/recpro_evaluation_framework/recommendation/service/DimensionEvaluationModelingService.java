package de.ubt.ai4.petter.recpro.recpro_evaluation_framework.recommendation.service;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.fasterxml.jackson.databind.type.CollectionType;
import com.fasterxml.jackson.datatype.jsr310.JavaTimeModule;
import de.ubt.ai4.petter.recpro.recpro_backend_lib.recpro.model.recommendation.modeling.dimension.RecommendationDimension;
import de.ubt.ai4.petter.recpro.recpro_evaluation_framework.util.api.ApiService;
import lombok.RequiredArgsConstructor;
import org.springframework.core.io.ClassPathResource;
import org.springframework.stereotype.Service;

import java.util.List;

import static de.ubt.ai4.petter.recpro.recpro_evaluation_framework.util.api.ApiConstants.*;

@Service
@RequiredArgsConstructor
public class DimensionEvaluationModelingService {

    private final ApiService apiService;

    public void createDimensions() {

        ObjectMapper mapper = new ObjectMapper();
        mapper.registerModule(new JavaTimeModule());

        CollectionType listType = mapper.getTypeFactory().constructCollectionType(List.class, RecommendationDimension.class);

        try {
            List<RecommendationDimension> dimensions = mapper.readValue(new ClassPathResource("configuration/data/recommendation/dimensions.json").getInputStream(), listType);

            dimensions.forEach(dimension -> this.apiService.getRestClient().post().uri(RECOMMENDATION_DIMENSION_MODELING + CREATE).body(dimension).retrieve().body(RecommendationDimension.class));
        } catch (Exception e) {
            throw new RuntimeException(e);
        }
    }
}
