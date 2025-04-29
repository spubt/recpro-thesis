package de.ubt.ai4.petter.recpro.recpro_evaluation_framework.generation.controller;

import de.ubt.ai4.petter.recpro.recpro_evaluation_framework.generation.service.DataGenerationService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("dataGeneration")
@RequiredArgsConstructor
public class DataGenerationController {

    private final DataGenerationService dataGenerationService;

    @GetMapping("test")
    public void test() {
        dataGenerationService.test();
    }

    @GetMapping("executeNew")
    public void executeNew(@RequestParam String email, @RequestParam String event, @RequestParam String processKey) {
        dataGenerationService.executeNew(email, event, processKey);
    }

    @GetMapping("executeFull")
    public void executeFull(@RequestParam String email) {
        this.dataGenerationService.executeAll(email);
    }

    @GetMapping("executeNext")
    public void executeNext(@RequestParam String email) {
        this.dataGenerationService.executeNext(email);
    }
}
