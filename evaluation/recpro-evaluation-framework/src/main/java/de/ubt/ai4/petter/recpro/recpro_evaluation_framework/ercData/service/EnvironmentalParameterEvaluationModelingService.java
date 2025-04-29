package de.ubt.ai4.petter.recpro.recpro_evaluation_framework.ercData.service;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.fasterxml.jackson.databind.type.CollectionType;
import com.fasterxml.jackson.datatype.jsr310.JavaTimeModule;
import de.ubt.ai4.petter.recpro.recpro_backend_lib.recpro.model.ercData.environmentalParameter.modeling.AbstractEnvironmentalParameter;
import de.ubt.ai4.petter.recpro.recpro_backend_lib.recpro.model.recpro.modeling.enviornmentalParameter.EnvironmentalParameterConfiguration;
import de.ubt.ai4.petter.recpro.recpro_evaluation_framework.util.api.ApiService;
import lombok.RequiredArgsConstructor;
import org.springframework.core.ParameterizedTypeReference;
import org.springframework.core.io.ClassPathResource;
import org.springframework.stereotype.Service;

import java.io.IOException;
import java.util.ArrayList;
import java.util.List;

import static de.ubt.ai4.petter.recpro.recpro_evaluation_framework.util.api.ApiConstants.*;

@Service
@RequiredArgsConstructor
public class EnvironmentalParameterEvaluationModelingService {

    private final ApiService apiService;

    public void createEnvironmentalParameters() {
        ObjectMapper mapper = new ObjectMapper();
        mapper.registerModule(new JavaTimeModule());

        CollectionType listType = mapper.getTypeFactory().constructCollectionType(List.class, AbstractEnvironmentalParameter.class);

        try {
            List<AbstractEnvironmentalParameter> parameters = mapper.readValue(new ClassPathResource("configuration/data/ercData/environmentalParameters.json").getInputStream(), listType);
            parameters.forEach(param -> this.apiService.getRestClient().post().uri(ERC_DATA_ENVIRONMENT_PARAMETER_MODELING + CREATE).body(param).retrieve().body(AbstractEnvironmentalParameter.class));
        } catch (Exception e) {
            throw new RuntimeException(e);
        }
    }

    public void assignEnvironmentalParameters() {
        ObjectMapper mapper = new ObjectMapper();
        mapper.registerModule(new JavaTimeModule());

        CollectionType listType = mapper.getTypeFactory().constructCollectionType(List.class, EnvironmentalParameterConfiguration.class);

        List<String> activities = new ArrayList<>();
        activities.add("analysis");
        activities.add("budget_planning");
        activities.add("catering");
        activities.add("concept");
        activities.add("execute");
        activities.add("invitations");
        activities.add("location");
        activities.add("logistics");
        activities.add("prepare");
        activities.add("report");

        activities.forEach(act -> {
            try {
                List<EnvironmentalParameterConfiguration> configurations = mapper.readValue(new ClassPathResource("configuration/data/ercData/assign/environmentalParameters/" + act + ".json").getInputStream(), listType);
                this.apiService.getRestClient().post(). uri(RECPRO_MODELING_ERC_DATA_ENVIRONMENTAL_PARAMETER_CONFIGURATION + CREATE_ALL + "?" + ACTIVITY_ID + "=" + act).body(configurations).retrieve().body(new ParameterizedTypeReference<>(){});
            } catch (IOException e) {
                throw new RuntimeException(e);
            }
        });

    }

    public List<AbstractEnvironmentalParameter> getAllEnvironmentalParameters() {
        return apiService.getRestClient().get().uri(ERC_DATA_ENVIRONMENT_PARAMETER_MODELING + GET_ALL).retrieve().body(new ParameterizedTypeReference<>() {});
    }
}
