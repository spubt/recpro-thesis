package de.ubt.ai4.petter.recpro.recpro_evaluation_framework.configuration.controller;

import de.ubt.ai4.petter.recpro.recpro_evaluation_framework.configuration.service.ConfigurationService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequiredArgsConstructor
@RequestMapping("api/config")
public class ConfigurationController {

    private final ConfigurationService configurationService;

    @GetMapping("createProcess")
    public void createProcess() {
        configurationService.createProcess();
    }

    @GetMapping("createFeedback")
    public void createFeedback() {
        configurationService.createFeedback();
    }

    @GetMapping("createMetaAttributes")
    public void createMetaAttributes() {
        configurationService.createMetaAttributes();
    }

    @GetMapping("assignMetaAttributes")
    public void assignMetaAttributes() {
        configurationService.assignMetaAttributes();
    }

    @GetMapping("createActivityParameters")
    public void createActivityParameters() {
        configurationService.createActivityParameters();
    }

    @GetMapping("assignActivityParameters")
    public void assignActivityParameters() {
        configurationService.assignActivityParameters();
    }

    @GetMapping("createEnvironmentalParameters")
    public void createEnvironmentalParameters() {
        configurationService.createEnvironmentalParameters();
    }

    @GetMapping("assignEnvironmentalParameters")
    public void assignEnvironmentalParameters() {
        configurationService.assignEnvironmentalParameters();
    }

    @GetMapping("createUsers")
    public void createUsers() {
        configurationService.createUsers();
    }

    @GetMapping("createDimensions")
    public void createDimensions() {
        configurationService.createDimensions();
    }

    @GetMapping("createRecommendationServices")
    public void createRecommendationServices() {
        configurationService.createRecommendationServices();
    }

    @GetMapping("initialize")
    public void initialize() {
        configurationService.initialize();
    }
}
