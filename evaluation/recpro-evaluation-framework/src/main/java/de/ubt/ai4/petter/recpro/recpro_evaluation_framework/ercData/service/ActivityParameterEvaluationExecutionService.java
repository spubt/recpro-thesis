package de.ubt.ai4.petter.recpro.recpro_evaluation_framework.ercData.service;

import com.fasterxml.jackson.core.type.TypeReference;
import com.fasterxml.jackson.databind.ObjectMapper;
import de.ubt.ai4.petter.recpro.recpro_backend_lib.recpro.model.bpm.modeling.Activity;
import de.ubt.ai4.petter.recpro.recpro_backend_lib.recpro.model.recpro.modeling.activityParameter.ActivityParameterConfiguration;
import de.ubt.ai4.petter.recpro.recpro_evaluation_framework.util.api.ApiService;
import lombok.RequiredArgsConstructor;
import org.springframework.core.ParameterizedTypeReference;
import org.springframework.core.io.ClassPathResource;
import org.springframework.stereotype.Service;

import java.io.InputStream;
import java.util.List;
import java.util.Map;

import static de.ubt.ai4.petter.recpro.recpro_evaluation_framework.util.api.ApiConstants.*;

@Service
@RequiredArgsConstructor
public class ActivityParameterEvaluationExecutionService {

    private final ApiService apiService;

    public List<ActivityParameterConfiguration> getActivityParametersByActivity(Activity activity) {
        return apiService.getRestClient().get().uri(RECPRO_MODELING_ERC_DATA_ACTIVITY_PARAMETER_CONFIGURATION + GET_BY_ACTIVITY_ID + activity.getId()).retrieve().body(new ParameterizedTypeReference<>(){});
    }

    public Object fillParameters(String activityId, String activityParameterId, String event) {

        ObjectMapper mapper = new ObjectMapper();
        try {
            InputStream is = new ClassPathResource("example/data/bpm/new/" + event + ".json").getInputStream();

            Map<String, Map<String, Object>> process = mapper.readValue(is, new TypeReference<>() {});
            return process.get(activityId).get(activityParameterId);
        } catch (Exception e) {
            e.printStackTrace();
            return null;
        }
    }
}
