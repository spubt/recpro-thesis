package de.ubt.ai4.petter.recpro.recpro_evaluation_framework.util.api;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.HttpRequest;
import org.springframework.http.client.ClientHttpRequestExecution;
import org.springframework.http.client.ClientHttpRequestInterceptor;
import org.springframework.http.client.ClientHttpResponse;

import java.io.IOException;

public class RequestLoggingInterceptor implements ClientHttpRequestInterceptor  {
    private static final Logger log = LoggerFactory.getLogger(RequestLoggingInterceptor.class);

    @Value("${recpro.logging.enabled:false}")
    private boolean logging;

    @Override
    public ClientHttpResponse intercept(
            HttpRequest request,
            byte[] body,
            ClientHttpRequestExecution execution
    ) throws IOException {

        if (logging) {
            log.info("Requesting {} {}", request.getMethod(), request.getURI());

            log.info("Headers: {}", request.getHeaders());
        }

        return execution.execute(request, body);
    }
}
