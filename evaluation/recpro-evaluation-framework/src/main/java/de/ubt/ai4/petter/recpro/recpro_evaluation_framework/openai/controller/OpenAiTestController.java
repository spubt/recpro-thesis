package de.ubt.ai4.petter.recpro.recpro_evaluation_framework.openai.controller;

import de.ubt.ai4.petter.recpro.recpro_evaluation_framework.openai.service.OpenAiTest;
import lombok.RequiredArgsConstructor;
import org.springframework.ai.chat.model.ChatResponse;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequiredArgsConstructor
@RequestMapping("openai")
public class OpenAiTestController {

    private final OpenAiTest openAiTest;

    @GetMapping("/test")
    public ChatResponse test() {
        return openAiTest.test();
    }
}
