package de.ubt.ai4.petter.recpro.recpro_backend_lib.recpro.model.bpm.modeling;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.ManyToMany;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.hibernate.annotations.Cascade;

import java.util.HashSet;
import java.util.Set;
import java.util.UUID;

@Entity
@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class BpmRole {
    @Id
    @Builder.Default
    private String id = UUID.randomUUID().toString();
    private String name;
    private String description;
    private String bpmsElementId;

    @ManyToMany
    @Cascade(org.hibernate.annotations.CascadeType.ALL)
    private Set<BpmRole> children = new HashSet<>();
}
