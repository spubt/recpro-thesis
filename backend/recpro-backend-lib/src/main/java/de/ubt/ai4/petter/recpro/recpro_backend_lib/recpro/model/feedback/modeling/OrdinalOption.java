package de.ubt.ai4.petter.recpro.recpro_backend_lib.recpro.model.feedback.modeling;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.UUID;

@Entity
@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class OrdinalOption {
    @Id
    @Builder.Default
    private String id = UUID.randomUUID().toString();
    private int value;
    private String label;
    private int position;
}
