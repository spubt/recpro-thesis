package de.ubt.ai4.petter.recpro.recpro_backend_lib.recpro.model.bpm.execution;

import de.ubt.ai4.petter.recpro.recpro_backend_lib.recpro.model.bpm.modeling.Process;
import de.ubt.ai4.petter.recpro.recpro_backend_lib.recpro.model.user.modeling.User;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.hibernate.annotations.Cascade;
import org.hibernate.annotations.CascadeType;

import java.time.Instant;
import java.util.ArrayList;
import java.util.List;
import java.util.UUID;

@Entity
@AllArgsConstructor
@NoArgsConstructor
@Builder
@Data
public class RecproProcessInstance {
    @Id
    @Builder.Default()
    private String id = UUID.randomUUID().toString();

    private String bpmsProcessInstanceId;

    @ManyToOne
    private Process process;
    private String bpmsProcessId;

    private String description;

    private Instant startTime;
    private Instant endTime;

    @Enumerated(EnumType.STRING)
    @Builder.Default()
    private RecproProcessInstanceState state = RecproProcessInstanceState.STARTED;

    @ManyToOne
    private User startedBy;

    @OneToMany()
    @Builder.Default()
    @Cascade(CascadeType.ALL)
    private List<RecproTaskInstance> recproTaskInstances = new ArrayList<>();
}
