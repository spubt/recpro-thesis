package de.ubt.ai4.petter.recpro.recpro_evaluation_framework.bpm.service;

import de.ubt.ai4.petter.recpro.recpro_backend_lib.recpro.model.bpm.modeling.Process;
import de.ubt.ai4.petter.recpro.recpro_evaluation_framework.util.api.ApiService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import static de.ubt.ai4.petter.recpro.recpro_evaluation_framework.util.api.ApiConstants.*;

@Service
@RequiredArgsConstructor
public class BpmEvaluationModelingService {

    private final ApiService apiService;

    public de.ubt.ai4.petter.recpro.recpro_backend_lib.recpro.model.bpm.modeling.Process getProcess(String key) {
        return apiService.getRestClient().get().uri(BPM_PROCESS_MODELING + GET + "key/" + key).retrieve().body(Process.class);
    }
}
