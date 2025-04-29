package de.ubt.ai4.petter.recpro.recpro_backend_lib.recpro.model.bpm.execution;

import de.ubt.ai4.petter.recpro.recpro_backend_lib.recpro.model.bpm.modeling.Activity;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.hibernate.annotations.CreationTimestamp;
import org.hibernate.annotations.UpdateTimestamp;

import java.time.Instant;
import java.util.UUID;

@Entity
@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class RecproTaskInstance {
    @Id
    @Builder.Default
    private String id = UUID.randomUUID().toString();
    private String bpmsTaskInstanceId;
    private String description;

    @ManyToOne
    private Activity activity;

    @ManyToOne
    private RecproProcessInstance recproProcessInstance;

    private String assigneeId;

    @CreationTimestamp
    private Instant createTime;

    @UpdateTimestamp
    private Instant updateTime;
    private Instant endTime;

    @Enumerated(EnumType.STRING)
    private RecproTaskInstanceState state;

}
