package de.ubt.ai4.petter.recpro.recpro_evaluation_framework.bpm.controller;

import de.ubt.ai4.petter.recpro.recpro_evaluation_framework.bpm.service.BpmEvaluationExecutionService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("bpmExecution")
@RequiredArgsConstructor
public class BpmExecutionController {

//    private final BpmExecutionService bpmExecutionService;

    private final BpmEvaluationExecutionService bpmService;
//    @GetMapping("execute")
//    public void execute() {
//        this.bpmExecutionService.execute("test");
//    }

    @GetMapping("startProcess")
    public void startProcess(@RequestParam String email, @RequestParam String event, @RequestParam String processKey) {
        this.bpmService.startProcess(processKey, email, event);
    }

}
