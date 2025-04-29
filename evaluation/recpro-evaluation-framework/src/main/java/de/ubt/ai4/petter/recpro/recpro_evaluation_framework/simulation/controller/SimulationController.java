package de.ubt.ai4.petter.recpro.recpro_evaluation_framework.simulation.controller;
import de.ubt.ai4.petter.recpro.recpro_evaluation_framework.simulation.model.SimulationType;
import de.ubt.ai4.petter.recpro.recpro_evaluation_framework.simulation.service.SimulationService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("simulation")
@RequiredArgsConstructor
public class SimulationController {

    private final SimulationService simulationService;

    @GetMapping("run")
    public void run(@RequestParam SimulationType simulationType) {
        simulationService.runSimulation(simulationType);
    }

}
