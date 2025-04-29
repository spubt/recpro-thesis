package de.ubt.ai4.petter.recpro.recpro_evaluation_framework.ercData.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.time.Instant;

@RestController
@RequestMapping("erc/")
public class ErcDataController {

    @GetMapping("envParams/parkplatz")
    public double parkplatz() {
        return 2000;
    }

    @GetMapping("envParams/parkplatz-execute")
    public double parkplatzExecute() {
        return 2000;
    }

    @GetMapping("envParams/parkplatz-location")
    public double parkplatzLocation() {
        return 2000;
    }

    @GetMapping("envParams/parkplatz-logistics")
    public double parkplatzLogistics() {
        return 2000;
    }

    @GetMapping("envParams/noise")
    public double noise() {
        return 78;
    }

    @GetMapping("envParams/noise-execute")
    public double noiseExecute() {
        return 78;
    }


    @GetMapping("envParams/temperature")
    public double temperature() {
        return 27;
    }

    @GetMapping("envParams/temperature-location")
    public double temperatureLocation() {
        return 27;
    }

    @GetMapping("envParams/temperature-execute")
    public double temperatureExecute() {
        return 27;
    }

    @GetMapping("envParams/temperature-prepare")
    public double temperaturePrepare() {
        return 27;
    }

    @GetMapping("envParams/date")
    public Instant date() {
        return Instant.now();
    }

    @GetMapping("envParams/weather")
    public String weather() {
        return "Bewölkt";
    }

    @GetMapping("envParams/weather-location")
    public String weatherLocation() {
        return "Bewölkt";
    }

    @GetMapping("envParams/weather-execute")
    public String weatherExecute() {
        return "Bewölkt";
    }

    @GetMapping("envParams/weather-prepare")
    public String weatherPrepare() {
        return "Bewölkt";
    }


    @GetMapping("envParams/date-test")
    public Instant dateEnvParam() {
        return Instant.now();
    }

    @GetMapping("envParams/binary-test")
    public boolean binaryEnvParam() {
        return false;
    }

    @GetMapping("envParams/numeric-test")
    public double numericEnvParam() {
        return 42.42;
    }
}
