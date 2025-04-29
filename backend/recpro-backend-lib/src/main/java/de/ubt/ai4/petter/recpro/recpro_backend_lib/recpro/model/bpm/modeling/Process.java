package de.ubt.ai4.petter.recpro.recpro_backend_lib.recpro.model.bpm.modeling;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.Instant;
import java.util.UUID;

@Entity
@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class Process {
    @Id
    @Builder.Default
    private String id = UUID.randomUUID().toString();

    private String name;
    private String description;
    private String bpmsElementId;
    private String version;
    private String processKey;
    private boolean latest;
    private Instant createdAt;
    private Instant lastModifiedAt;
    private String author;
    private int defaultPriority;
    @Enumerated(EnumType.STRING)
    private ProcessStatus status;

    @OneToOne(cascade = CascadeType.ALL)
    private ProcessModel processModel;
}
