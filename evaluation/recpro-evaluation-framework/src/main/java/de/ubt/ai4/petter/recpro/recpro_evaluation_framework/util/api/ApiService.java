package de.ubt.ai4.petter.recpro.recpro_evaluation_framework.util.api;

import lombok.Getter;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestClient;

@Service
@Getter
public class ApiService {

    private final RestClient restClient;

    public ApiService(RestClient.Builder restClientBuilder) {

        restClientBuilder.requestInterceptor(new RequestLoggingInterceptor());
        this.restClient = restClientBuilder.baseUrl("http://localhost:8080").build();
    }
}
