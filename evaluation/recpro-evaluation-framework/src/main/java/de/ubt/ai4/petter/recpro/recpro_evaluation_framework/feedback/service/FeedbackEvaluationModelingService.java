package de.ubt.ai4.petter.recpro.recpro_evaluation_framework.feedback.service;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.fasterxml.jackson.datatype.jsr310.JavaTimeModule;
import de.ubt.ai4.petter.recpro.recpro_backend_lib.recpro.model.bpm.modeling.Process;
import de.ubt.ai4.petter.recpro.recpro_backend_lib.recpro.model.feedback.modeling.Feedback;
import de.ubt.ai4.petter.recpro.recpro_evaluation_framework.util.api.ApiService;
import lombok.RequiredArgsConstructor;
import org.springframework.core.io.ClassPathResource;
import org.springframework.stereotype.Service;


import static de.ubt.ai4.petter.recpro.recpro_evaluation_framework.util.api.ApiConstants.*;

@Service
@RequiredArgsConstructor
public class FeedbackEvaluationModelingService {
    private final ApiService apiService;

    public void createFeedback() {
        ObjectMapper objectMapper = new ObjectMapper();
        objectMapper.registerModule(new JavaTimeModule());
        try {
            Feedback feedback = objectMapper.readValue(new ClassPathResource("configuration/data/feedback/feedback.json").getInputStream(), Feedback.class);
            this.apiService.getRestClient().post().uri(FEEDBACK_MODELING + CREATE).body(feedback).retrieve().body(Process.class);
        } catch (Exception e) {
            throw new RuntimeException(e);
        }
    }

    public Feedback getActiveFeedback() {
        return this.apiService.getRestClient().get().uri(FEEDBACK_MODELING + GET_ACTIVE).retrieve().body(Feedback.class);
    }
}
