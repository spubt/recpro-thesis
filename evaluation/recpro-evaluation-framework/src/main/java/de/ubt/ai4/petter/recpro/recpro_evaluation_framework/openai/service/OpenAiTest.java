package de.ubt.ai4.petter.recpro.recpro_evaluation_framework.openai.service;

import lombok.RequiredArgsConstructor;
import org.springframework.ai.chat.model.ChatModel;
import org.springframework.ai.chat.model.ChatResponse;
import org.springframework.ai.chat.prompt.Prompt;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class OpenAiTest {

    private final ChatModel chatModel;

    public ChatResponse test() {

        String prompt = "Du bist der Chef einer Firma. In dieser Firma gibt es einen Prozess \"Veranstaltungsplanung\". " +
                "Dieser besteht aus Aktivitäten, die von Mitarbeitenden ausgeführt werden können. " +
                "Jede Aktivität hat bestimmte Metaattribute, die diese Aktivität beschreiben. " +
                "Zudem hat sie Aktivitätsparameter, welche entweder Input- oder Outputparameter sein können und entweder vor der Aktivität ausgefüllt wurden oder beim Ausführen der Aktivität vom Nutzer ausgeführt werden müssen. " +
                "Weiterhin jede Aktivität Umgebungsparameter, die automatisch während der Prozessausführung geholt werden.";

        String process = "Der Prozess \"Veranstaltungsplanung\" hat folgende Aktivitäten mit folgenden Metaattributen, Umgebungsparametern und Aktivitätsparametern (durch TAB getrennt): " +
                "\"Zielgruppenanalyse durchführen\" \t Analyse, Planung \t \t Zielgruppe" +
                "\"Budget Planen\" \t Finanzen, Planung \t \t Budget, Locationbudget, Cateringbudget, Technikbudget" +
                "\"Konzept erstellen\" \t Analyse, Finanzen, Kreativität, Planung, Koordination \t \t Konzept" +
                "\"Location auswählen\" \t Finanzen, Logistik, Organisation, Koordination \t Temperatur, Wetterbedingungen, Tageszeit \t Konzept, Locationinformation" +
                "\"Catering organisieren\" \t\t\t" +
                "\"Technik bereitstellen\" \t\t\t" +
                "\"Einladungen erstellen und versenden\" \t\t\t" +
                "\"Logistik organisieren\" \t\t\t" +
                "\"Event vorbereiten\" \t\t\t" +
                "\"Event durchführen\" \t\t\t" +
                "\"Abschlussbericht erstellen\" \t\t\t ";

        String Zielgruppe = "Der Aktivitätsparameter \"Zielgruppe\" beschreibt die Zielgruppe, die mit der Veranstaltung erreicht werden soll." +
                "Bitte generiere 10 verschiedene Zielgruppen." +
                "Gebe mir diese bitte als Tab-Seperated Value zurück." +
                "Bitte gebe mir ausschließlich die Zielgruppen!";

        String users = "Die Firma hat insgesamt 10 unterschiedliche Mitarbeitende. " +
                "Diese haben jeweils unterschiedliche Präferenzen hinsichtlich der einzelnen Aktivitäten, der Umgebungsparameter, der Aktivitätsparameter und der Metaattribute." +
                "Bitte erstelle 10 virtuelle Mitarbeitenden mit unterschiedlichen Präferenzen. " +
                "Dabei sollen die Präferenzen nachvollziehbar sein, d.h. sich nicht nur an den Namen der Aktivitäten orientieren, sondern vor allem auch an den Metaattributen und den konkreten Werten der Umgebungs- und Aktivitätsparametern." +
                "Gebe mir diese bitte als Tab-Seperated Value zurück." +
                "Bitte gebe mir ausschließlich die Mitarbeitenden zurück!";

        String environmentalParameters = "";


        ChatResponse response = chatModel.call(new Prompt(
            prompt + process + Zielgruppe
        ));


//        System.out.println(response);
        System.out.println(response.getResults().getFirst().getOutput().getText());
        return response;
    }

    public Double getRating(String request) {
        return Double.parseDouble(chatModel.call(request));
    }
}
