package de.ubt.ai4.petter.recpro.recpro_evaluation_framework.bpm.service;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.fasterxml.jackson.datatype.jsr310.JavaTimeModule;
import de.ubt.ai4.petter.recpro.recpro_backend_lib.recpro.model.bpm.execution.RecproProcessInstance;
import de.ubt.ai4.petter.recpro.recpro_backend_lib.recpro.model.bpm.execution.RecproTasklist;
import de.ubt.ai4.petter.recpro.recpro_backend_lib.recpro.model.bpm.execution.RecproTasklistEntry;
import de.ubt.ai4.petter.recpro.recpro_backend_lib.recpro.model.bpm.modeling.Process;
import de.ubt.ai4.petter.recpro.recpro_backend_lib.recpro.model.user.modeling.User;
import de.ubt.ai4.petter.recpro.recpro_evaluation_framework.user.service.UserEvaluationExecutionService;
import de.ubt.ai4.petter.recpro.recpro_evaluation_framework.util.api.ApiService;
import lombok.RequiredArgsConstructor;
import org.springframework.core.ParameterizedTypeReference;
import org.springframework.core.io.ClassPathResource;
import org.springframework.stereotype.Service;

import java.util.List;

import static de.ubt.ai4.petter.recpro.recpro_evaluation_framework.util.api.ApiConstants.*;


@Service
@RequiredArgsConstructor
public class BpmEvaluationExecutionService {



    private final ApiService apiService;
    private final BpmEvaluationModelingService modelingService;
    private final BpmEvaluationModelingService bpmModelingService;
    private final UserEvaluationExecutionService userEvaluationExecutionService;

//    public void startProcess(String processId, String userId) {
//        apiService.getRestClient().post().uri(BPM_PROCESS_EXECUTION + START + processId).header(USER_ID, userId).retrieve().body(RecproProcessInstance.class);
//    }

    public void startProcess(String key, String email, String event) {
        Process process = bpmModelingService.getProcess(key);
        User u = this.userEvaluationExecutionService.login(email);
        apiService.getRestClient().post().uri(BPM_PROCESS_EXECUTION + START + process.getId() + "?description=" + event).header(USER_ID, u.getId()).retrieve().body(RecproProcessInstance.class);

    }

    public RecproTasklist getRecproTasklist(String userId) {
        return apiService.getRestClient().get().uri(BPM_TASKLIST_EXECUTION + GET_ALL).header(USER_ID, userId).retrieve().body(RecproTasklist.class);
    }

    public RecproTasklistEntry complete(RecproTasklistEntry entry, String userId, RecproTasklist tasklist) {
        return apiService.getRestClient().post().uri(BPM_TASK_EXECUTION + COMPLETE + entry.getId()).header(USER_ID, userId).body(tasklist).retrieve().body(RecproTasklistEntry.class);
    }

    public void execute() {

    }

    public List<RecproTasklistEntry> getByProcessId(String processId) {
        return apiService.getRestClient().get().uri(BPM_TASKLIST_EXECUTION + "getByProcessInstanceId?processInstanceId=" + processId).retrieve().body(new ParameterizedTypeReference<>(){});
    }

    public void createProcess(){
        ObjectMapper objectMapper = new ObjectMapper();
        objectMapper.registerModule(new JavaTimeModule());
        try {
            Process example = objectMapper.readValue(new ClassPathResource("configuration/data/bpm/veranstaltungsplanung.json").getInputStream(), Process.class);
            this.apiService.getRestClient().post().uri(BPM_PROCESS_MODELING + CREATE).body(example).retrieve().body(Process.class);
        } catch (Exception e) {
            throw new RuntimeException(e);
        }

    }

}
