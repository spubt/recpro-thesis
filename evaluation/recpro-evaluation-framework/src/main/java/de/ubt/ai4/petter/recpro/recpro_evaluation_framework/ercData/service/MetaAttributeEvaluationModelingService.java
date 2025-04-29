package de.ubt.ai4.petter.recpro.recpro_evaluation_framework.ercData.service;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.fasterxml.jackson.databind.type.CollectionType;
import de.ubt.ai4.petter.recpro.recpro_backend_lib.recpro.model.ercData.metaAttribute.modeling.MetaAttribute;
import de.ubt.ai4.petter.recpro.recpro_backend_lib.recpro.model.recpro.modeling.metaAttribute.MetaAttributeConfiguration;
import de.ubt.ai4.petter.recpro.recpro_evaluation_framework.util.api.ApiService;
import lombok.RequiredArgsConstructor;
import org.springframework.core.ParameterizedTypeReference;
import org.springframework.core.io.ClassPathResource;
import org.springframework.stereotype.Service;

import java.io.IOException;
import java.util.ArrayList;
import java.util.List;

import static de.ubt.ai4.petter.recpro.recpro_evaluation_framework.util.api.ApiConstants.*;
import static de.ubt.ai4.petter.recpro.recpro_evaluation_framework.util.api.ApiConstants.META_ATTRIBUTE_ID;

@Service
@RequiredArgsConstructor
public class MetaAttributeEvaluationModelingService {
    private final ApiService apiService;

    public void createMetaAttributes() {
        ObjectMapper mapper = new ObjectMapper();

        CollectionType listType = mapper.getTypeFactory().constructCollectionType(List.class, MetaAttribute.class);
        try {
            List<MetaAttribute> attributes = mapper.readValue(new ClassPathResource("configuration/data/ercData/metaAttributes.json").getInputStream(), listType);
            attributes.forEach(attr -> this.apiService.getRestClient().post().uri(ERC_DATA_META_ATTRIBUTE_MODELING + CREATE).body(attr).retrieve().body(MetaAttribute.class));
        } catch (Exception e) {
            throw new RuntimeException(e);
        }
    }

    public void assignMetaAttributes() {
        ObjectMapper mapper = new ObjectMapper();

        CollectionType listType = mapper.getTypeFactory().constructCollectionType(List.class, MetaAttributeConfiguration.class);

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
                List<MetaAttributeConfiguration> configurations = mapper.readValue(new ClassPathResource("configuration/data/ercData/assign/metaAttributes/" + act + ".json").getInputStream(), listType);
                this.apiService.getRestClient().post().uri(RECPRO_MODELING_ERC_DATA_META_ATTRIBUTE_CONFIGURATION + CREATE_ALL + "?" + ACTIVITY_ID + "=" + act + "&" + META_ATTRIBUTE_ID + "=").body(configurations).retrieve().body(new ParameterizedTypeReference<>(){});
            } catch (IOException e) {
                throw new RuntimeException(e);
            }
        });
    }

    public List<MetaAttribute> getAllMetaAttributes() {
        return apiService.getRestClient().get().uri(ERC_DATA_META_ATTRIBUTE_MODELING + GET_ALL).retrieve().body(new ParameterizedTypeReference<>() {});
    }
}
