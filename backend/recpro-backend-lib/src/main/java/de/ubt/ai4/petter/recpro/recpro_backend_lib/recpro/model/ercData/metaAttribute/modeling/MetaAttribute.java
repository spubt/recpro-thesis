package de.ubt.ai4.petter.recpro.recpro_backend_lib.recpro.model.ercData.metaAttribute.modeling;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.UUID;

@Entity
@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class MetaAttribute {
    @Id
    @Builder.Default
    private String id = UUID.randomUUID().toString();
    private String label;
    private String description;
}
