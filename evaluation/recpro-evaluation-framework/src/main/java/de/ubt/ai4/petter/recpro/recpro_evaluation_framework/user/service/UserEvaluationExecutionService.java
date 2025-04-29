package de.ubt.ai4.petter.recpro.recpro_evaluation_framework.user.service;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.fasterxml.jackson.datatype.jsr310.JavaTimeModule;
import de.ubt.ai4.petter.recpro.recpro_backend_lib.recpro.model.user.modeling.User;
import de.ubt.ai4.petter.recpro.recpro_evaluation_framework.util.api.ApiService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import static de.ubt.ai4.petter.recpro.recpro_evaluation_framework.util.api.ApiConstants.GET;
import static de.ubt.ai4.petter.recpro.recpro_evaluation_framework.util.api.ApiConstants.USER_MODELING;

@Service
@RequiredArgsConstructor
public class UserEvaluationExecutionService {

    private final ApiService apiService;

    public User login(String email) {
        ObjectMapper mapper = new ObjectMapper();
        mapper.registerModule(new JavaTimeModule());
        return this.apiService.getRestClient().get().uri(USER_MODELING + GET + "mail/" + email).retrieve().body(User.class);
    }
}
