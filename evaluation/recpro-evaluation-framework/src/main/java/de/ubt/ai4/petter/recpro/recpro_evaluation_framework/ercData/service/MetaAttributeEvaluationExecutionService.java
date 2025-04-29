package de.ubt.ai4.petter.recpro.recpro_evaluation_framework.ercData.service;
import de.ubt.ai4.petter.recpro.recpro_backend_lib.recpro.model.bpm.modeling.Activity;
import de.ubt.ai4.petter.recpro.recpro_backend_lib.recpro.model.recpro.modeling.metaAttribute.MetaAttributeConfiguration;
import de.ubt.ai4.petter.recpro.recpro_evaluation_framework.util.api.ApiService;
import lombok.RequiredArgsConstructor;
import org.springframework.core.ParameterizedTypeReference;
import org.springframework.stereotype.Service;

import java.util.List;

import static de.ubt.ai4.petter.recpro.recpro_evaluation_framework.util.api.ApiConstants.*;

@Service
@RequiredArgsConstructor
public class MetaAttributeEvaluationExecutionService {

    private final ApiService apiService;



    public List<MetaAttributeConfiguration> getMetaAttributesByActivity(Activity activity) {
        return apiService.getRestClient().get().uri(RECPRO_MODELING_ERC_DATA_META_ATTRIBUTE_CONFIGURATION + GET_BY_ACTIVITY_ID + activity.getId()).retrieve().body(new ParameterizedTypeReference<>(){});
    }
}
