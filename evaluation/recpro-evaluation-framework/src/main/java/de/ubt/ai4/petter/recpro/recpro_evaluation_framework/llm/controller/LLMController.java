package de.ubt.ai4.petter.recpro.recpro_evaluation_framework.llm.controller;

import de.ubt.ai4.petter.recpro.recpro_evaluation_framework.llm.service.LLMService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("LLM")
@RequiredArgsConstructor
public class LLMController {

    private final LLMService llmService;

    @GetMapping("processDescription")
    public String getProcessDescription() {
        return llmService.processDescription();
    }

    @GetMapping("full")
    public String full() {
        return "";//llmService.fullRequest();
    }
}
