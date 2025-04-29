package de.ubt.ai4.petter.recpro.recpro_evaluation_framework.recommendation.service;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.fasterxml.jackson.databind.type.CollectionType;
import com.fasterxml.jackson.datatype.jsr310.JavaTimeModule;
import de.ubt.ai4.petter.recpro.recpro_backend_lib.recpro.model.recommendation.modeling.recommendationServiceModel.RecommendationServiceModel;
import de.ubt.ai4.petter.recpro.recpro_evaluation_framework.util.api.ApiService;
import lombok.RequiredArgsConstructor;
import org.springframework.core.ParameterizedTypeReference;
import org.springframework.core.io.ClassPathResource;
import org.springframework.stereotype.Service;

import java.util.List;

import static de.ubt.ai4.petter.recpro.recpro_evaluation_framework.util.api.ApiConstants.*;

@Service
@RequiredArgsConstructor
public class RecommendationServiceEvaluationModelingService {

    private final ApiService apiService;

    public List<RecommendationServiceModel> getRecommendationServiceModels() {
        return apiService.getRestClient().get().uri(RECOMMENDATION_MODELING + GET_ALL).retrieve().body(new ParameterizedTypeReference<>() {});
    }

    public void createRecommendationServices() {
        ObjectMapper mapper = new ObjectMapper();
        mapper.registerModule(new JavaTimeModule());

        CollectionType listType = mapper.getTypeFactory().constructCollectionType(List.class, RecommendationServiceModel.class);

        try {
            List<RecommendationServiceModel> recommendationServices = mapper.readValue(new ClassPathResource("configuration/data/recommendation/recommendationServices.json").getInputStream(), listType);
            recommendationServices.forEach(recService -> this.apiService.getRestClient().post().uri(RECOMMENDATION_MODELING + CREATE).body(recService).retrieve().body(RecommendationServiceModel.class));
        } catch (Exception e) {
            throw new RuntimeException(e);
        }
    }
}
