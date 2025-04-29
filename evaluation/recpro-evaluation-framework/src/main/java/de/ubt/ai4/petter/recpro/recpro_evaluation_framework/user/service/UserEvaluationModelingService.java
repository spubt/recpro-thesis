package de.ubt.ai4.petter.recpro.recpro_evaluation_framework.user.service;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.fasterxml.jackson.databind.type.CollectionType;
import com.fasterxml.jackson.datatype.jsr310.JavaTimeModule;
import de.ubt.ai4.petter.recpro.recpro_backend_lib.recpro.model.user.modeling.User;
import de.ubt.ai4.petter.recpro.recpro_evaluation_framework.util.api.ApiService;
import lombok.RequiredArgsConstructor;
import org.springframework.core.io.ClassPathResource;
import org.springframework.stereotype.Service;

import java.util.List;

import static de.ubt.ai4.petter.recpro.recpro_evaluation_framework.util.api.ApiConstants.*;

@Service
@RequiredArgsConstructor
public class UserEvaluationModelingService {
    private final ApiService apiService;

    public void createUsers() {
        ObjectMapper mapper = new ObjectMapper();
        mapper.registerModule(new JavaTimeModule());

        CollectionType listType = mapper.getTypeFactory().constructCollectionType(List.class, User.class);

        try {
            List<User> users = mapper.readValue(new ClassPathResource("configuration/data/user/users.json").getInputStream(), listType);

            users.forEach(user -> this.apiService.getRestClient().post().uri(USER_MODELING + CREATE + "?password=password").body(user).retrieve().body(User.class));
        } catch (Exception e) {
            throw new RuntimeException(e);
        }
    }

}
