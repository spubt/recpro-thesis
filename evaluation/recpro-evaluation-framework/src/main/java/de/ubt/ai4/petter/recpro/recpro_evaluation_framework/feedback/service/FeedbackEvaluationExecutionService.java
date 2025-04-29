package de.ubt.ai4.petter.recpro.recpro_evaluation_framework.feedback.service;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.fasterxml.jackson.databind.type.CollectionType;
import com.fasterxml.jackson.datatype.jsr310.JavaTimeModule;
import de.ubt.ai4.petter.recpro.recpro_backend_lib.recpro.model.bpm.execution.RecproTasklistEntry;
import de.ubt.ai4.petter.recpro.recpro_backend_lib.recpro.model.explanation.execution.model.AbstractExplanationInstance;
import de.ubt.ai4.petter.recpro.recpro_backend_lib.recpro.model.explanation.execution.model.PotentialFeedbackExplanationInstance;
import de.ubt.ai4.petter.recpro.recpro_backend_lib.recpro.model.feedback.execution.BinaryFeedbackInstance;
import de.ubt.ai4.petter.recpro.recpro_backend_lib.recpro.model.feedback.execution.FeedbackInstance;
import de.ubt.ai4.petter.recpro.recpro_backend_lib.recpro.model.feedback.execution.IntervalBasedFeedbackInstance;
import de.ubt.ai4.petter.recpro.recpro_backend_lib.recpro.model.feedback.execution.OrdinalFeedbackInstance;
import de.ubt.ai4.petter.recpro.recpro_backend_lib.recpro.model.feedback.modeling.*;
import de.ubt.ai4.petter.recpro.recpro_backend_lib.recpro.model.user.modeling.User;
import de.ubt.ai4.petter.recpro.recpro_evaluation_framework.generation.model.EvaluationFeedbackData;
import de.ubt.ai4.petter.recpro.recpro_evaluation_framework.simulation.model.SimulationType;
import de.ubt.ai4.petter.recpro.recpro_evaluation_framework.util.api.ApiService;
import lombok.RequiredArgsConstructor;
import org.springframework.core.ParameterizedTypeReference;
import org.springframework.core.io.ClassPathResource;
import org.springframework.stereotype.Service;

import java.io.File;
import java.io.IOException;
import java.io.PrintWriter;
import java.time.Instant;
import java.time.format.DateTimeFormatter;
import java.util.*;
import java.util.stream.Collectors;

import static de.ubt.ai4.petter.recpro.recpro_evaluation_framework.util.api.ApiConstants.*;
import static de.ubt.ai4.petter.recpro.recpro_evaluation_framework.util.api.ApiConstants.CREATE;

@Service
@RequiredArgsConstructor
public class FeedbackEvaluationExecutionService {

    private final ApiService apiService;

    public void saveFeedbackInstance(FeedbackInstance feedbackInstance) {
        this.apiService.getRestClient().post().uri(FEEDBACK_EXECUTION + CREATE ).body(feedbackInstance).retrieve().body(FeedbackInstance.class);
    }

    public FeedbackInstance createFeedbackInstance(Feedback feedback, RecproTasklistEntry tasklistEntry, User user, Object value ) {
        FeedbackInstance result;

        switch (feedback.getFeedbackType()) {
            case BINARY -> result = getBinaryFeedback(feedback, tasklistEntry, user, (Boolean) value);
            case ORDINAL -> result = getOrdinalFeedback(feedback, tasklistEntry, user, (Double) value);
            case INTERVAL_BASED -> result = getIntervalBasedFeedback(feedback, tasklistEntry, user, (Double) value);
            default -> throw new IllegalStateException("Unexpected value: " + feedback.getFeedbackType());
        }
        return result;
    }

    private BinaryFeedbackInstance getBinaryFeedback(Feedback feedback, RecproTasklistEntry tasklistEntry, User user, boolean value) {
        BinaryFeedbackInstance result = BinaryFeedbackInstance.builder()
                .id(UUID.randomUUID().toString())
                .user(user)
                .tasklistEntry(tasklistEntry)
                .feedback(feedback)
                .feedbackType(FeedbackType.BINARY)
                .timestamp(Instant.now())
                .value(((BinaryFeedback)feedback).isDefaultValue())
                .build();

        result.setValue(value);
        return result;
    }
    private OrdinalFeedbackInstance getOrdinalFeedback(Feedback feedback, RecproTasklistEntry tasklistEntry, User user, double value) {
        OrdinalFeedbackInstance result =  OrdinalFeedbackInstance.builder()
                .id(UUID.randomUUID().toString())
                .user(user)
                .tasklistEntry(tasklistEntry)
                .feedback(feedback)
                .feedbackType(FeedbackType.ORDINAL)
                .timestamp(Instant.now())
                .value(((OrdinalFeedback)feedback).getOptions().getFirst())
                .build();
        Optional<OrdinalOption> opt = ((OrdinalFeedback) feedback).getOptions().stream().filter(option -> option.getValue() == value).findFirst();

        opt.ifPresent(result::setValue);

        return result;
    }
    private IntervalBasedFeedbackInstance getIntervalBasedFeedback(Feedback feedback, RecproTasklistEntry tasklistEntry, User user, double value) {
        IntervalBasedFeedbackInstance result = IntervalBasedFeedbackInstance.builder()
                .id(UUID.randomUUID().toString())
                .user(user)
                .tasklistEntry(tasklistEntry)
                .feedback(feedback)
                .feedbackType(FeedbackType.INTERVAL_BASED)
                .timestamp(Instant.now())
                .value(((IntervalBasedFeedback)feedback).getDefaultValue())
                .build();
        result.setValue(value);
        return result;
    }

    public FeedbackInstance getByTasklistEntryId(String tasklistEntryId) {
        return this.apiService.getRestClient().get().uri(FEEDBACK_EXECUTION + GET + "tasklistEntry/" + tasklistEntryId).retrieve().body(FeedbackInstance.class);
    }

    public List<FeedbackInstance> getAll() {
        return this.apiService.getRestClient().get().uri(FEEDBACK_EXECUTION + GET_ALL).retrieve().body(new ParameterizedTypeReference<>(){});
    }

    public void saveFeedbackToFile(String path) {
        List<FeedbackInstance> instances = this.getAll();
        List<EvaluationFeedbackData> data = new ArrayList<>();

        // TODO: Order by date?

        instances.forEach(instance -> {
            String email = instance.getUser().getEmail();
            String activityId = instance.getTasklistEntry().getRecproTaskInstance().getActivity().getId();
            String processDescription = instance.getTasklistEntry().getRecproTaskInstance()
                    .getRecproProcessInstance().getDescription();
            double rating = 0;
            switch (instance.getFeedbackType()) {
                case ORDINAL -> rating = ((OrdinalFeedbackInstance) instance).getValue().getValue();
                case INTERVAL_BASED -> rating = ((IntervalBasedFeedbackInstance) instance).getValue();
                case BINARY -> rating = ((BinaryFeedbackInstance) instance).getValue() ? 1 : 0;
            }

            double potentialRating = 0;
            if (instance.getTasklistEntry().getExplanation() != null) {
                switch (instance.getTasklistEntry().getExplanation().getExplanationType()) {
                    case POTENTIAL_FEEDBACK -> potentialRating = ((PotentialFeedbackExplanationInstance) instance.getTasklistEntry().getExplanation()).getPotentialValue();
                }
            }

            data.add(EvaluationFeedbackData.builder().mail(email).activityId(activityId).event(processDescription).rating(rating).timestamp(instance.getTimestamp()).potentialRating(potentialRating).build());
        });

        try {
            ObjectMapper mapper = new ObjectMapper();
            mapper.registerModule(new JavaTimeModule());
            mapper.writerWithDefaultPrettyPrinter().writeValue(new File(path), data);
            System.out.println("Feedback erfolgreich in " + path + " gespeichert.");
        } catch (Exception e) {
            e.printStackTrace();
        }
    }

    public double getAverageRating(String path, String mail) {
        ObjectMapper mapper = new ObjectMapper();
        mapper.registerModule(new JavaTimeModule());

        CollectionType listType = mapper.getTypeFactory().constructCollectionType(List.class, EvaluationFeedbackData.class);

        try {
//            List<EvaluationFeedbackData> data = mapper.readValue(new ClassPathResource(path).getInputStream(), listType);
            List<EvaluationFeedbackData> data = mapper.readValue(new File(path), listType);
            return data.stream()
                    .filter(feedback -> mail.equals(feedback.getMail()))
                    .mapToDouble(EvaluationFeedbackData::getRating)
                    .average()
                    .orElse(0.0);
        } catch (Exception e) {
            throw new RuntimeException(e);
        }
    }

    public double getHighestRating(String path, String mail) {
        ObjectMapper mapper = new ObjectMapper();
        mapper.registerModule(new JavaTimeModule());
        CollectionType listType = mapper.getTypeFactory().constructCollectionType(List.class, EvaluationFeedbackData.class);

        try {
//            List<EvaluationFeedbackData> data = mapper.readValue(new ClassPathResource(path).getInputStream(), listType);
            List<EvaluationFeedbackData> data = mapper.readValue(new File(path), listType);
            return data.stream()
                    .filter(feedback -> mail.equals(feedback.getMail()))
                    .mapToDouble(EvaluationFeedbackData::getRating)
                    .max()
                    .orElse(0.0);
        } catch (Exception e) {
            throw new RuntimeException(e);
        }
    }

    public double getLowestRating(String path, String mail) {
        ObjectMapper mapper = new ObjectMapper();
        mapper.registerModule(new JavaTimeModule());
        CollectionType listType = mapper.getTypeFactory().constructCollectionType(List.class, EvaluationFeedbackData.class);

        try {
//            List<EvaluationFeedbackData> data = mapper.readValue(new ClassPathResource(path).getInputStream(), listType);
            List<EvaluationFeedbackData> data = mapper.readValue(new File(path), listType);
            return data.stream()
                    .filter(feedback -> mail.equals(feedback.getMail()))
                    .mapToDouble(EvaluationFeedbackData::getRating)
                    .min()
                    .orElse(0.0);
        } catch (Exception e) {
            throw new RuntimeException(e);
        }
    }

    public double getAverageRating(SimulationType simulationType, String mail) {
        return this.getAverageRating("data/evaluation/feedback/" + simulationType.toString() + ".json", mail);
    }

    public String getAverageRatings(String path) {
        String[] mails = new String[10];
        mails[0] = "alexander.berger@recpro.com.de";
        mails[1] = "fabian.muller@recpro.com.de";
        mails[2] = "max.mustermann@recpro.com.de";
        mails[3] = "julia.fischer@recpro.com.de";
        mails[4] = "katharina.schneider@recpro.com.de";
        mails[5] = "laura.beckmann@recpro.com.de";
        mails[6] = "lisa.baumann@recpro.com.de";
        mails[7] = "marie.sonnenschein@recpro.com.de";
        mails[8] = "markus.lehmann@recpro.com.de";
        mails[9] = "nobby.nic@recpro.com.de";

        StringBuilder result = new StringBuilder();
        for (String mail : mails) {
            double rating = this.getAverageRating(path, mail);
            double highestRating = this.getHighestRating(path, mail);
            double lowestRating = this.getLowestRating(path, mail);
            result.append(mail).append(":\t").append(rating).append("\t").append(highestRating).append("\t").append(lowestRating).append("\n");
        }
        return result.toString();
    }

    public void exportRatingsToCsv(String jsonFilePath, String csvOutputPath) {
        ObjectMapper mapper = new ObjectMapper();
        mapper.registerModule(new JavaTimeModule());
        CollectionType listType = mapper.getTypeFactory()
                .constructCollectionType(List.class, EvaluationFeedbackData.class);

        try {
            List<EvaluationFeedbackData> data = mapper.readValue(new File(jsonFilePath), listType);

            data.sort(Comparator
                    .comparing(EvaluationFeedbackData::getMail)
                    .thenComparing(EvaluationFeedbackData::getTimestamp));

            try (PrintWriter writer = new PrintWriter(new File(csvOutputPath))) {
                writer.println("mail,timestamp,rating");

                DateTimeFormatter formatter = DateTimeFormatter.ISO_INSTANT;

                for (EvaluationFeedbackData feedback : data) {
                    writer.printf("%s,%s,%f%n",
                            feedback.getMail(),
                            formatter.format(feedback.getTimestamp()),
                            feedback.getRating());
                }
            }
        } catch (IOException e) {
            throw new RuntimeException("Fehler beim Schreiben der CSV-Datei", e);
        }
    }

    public void exportRatingsToCsvForLineDiagram(String jsonFilePath, String csvOutputPath) {
        ObjectMapper mapper = new ObjectMapper();
        mapper.registerModule(new JavaTimeModule());
        CollectionType listType = mapper.getTypeFactory()
                .constructCollectionType(List.class, EvaluationFeedbackData.class);

        try {
            List<EvaluationFeedbackData> data = mapper.readValue(new File(jsonFilePath), listType);

            // Gruppiere Bewertungen nach Nutzer und sortiere jeweils nach Timestamp
            Map<String, List<EvaluationFeedbackData>> ratingsByUser = data.stream()
                    .collect(Collectors.groupingBy(EvaluationFeedbackData::getMail));

            ratingsByUser.values().forEach(list -> list.sort(Comparator.comparing(EvaluationFeedbackData::getTimestamp)));

            // Liste der Nutzer (sortiert)
            List<String> users = new ArrayList<>(ratingsByUser.keySet());
            Collections.sort(users);

            // Maximale Anzahl an Bewertungen ermitteln
            int maxRatings = ratingsByUser.values().stream().mapToInt(List::size).max().orElse(0);

            try (PrintWriter writer = new PrintWriter(new File(csvOutputPath))) {
                // Header schreiben
                writer.print("Position");
                for (String user : users) {
                    writer.print("," + user);
                }
                writer.println();

                // Zeilen schreiben
                for (int i = 0; i < maxRatings; i++) {
                    writer.print((i + 1));
                    for (String user : users) {
                        List<EvaluationFeedbackData> userRatings = ratingsByUser.get(user);
                        if (i < userRatings.size()) {
                            int ratingInt = (int) userRatings.get(i).getRating();
                            writer.print("," + ratingInt);
                        } else {
                            writer.print(","); // leeres Feld, wenn keine Bewertung vorhanden
                        }
                    }
                    writer.println();
                }
            }
        } catch (IOException e) {
            throw new RuntimeException("Fehler beim Schreiben der CSV-Datei", e);
        }
    }
}
