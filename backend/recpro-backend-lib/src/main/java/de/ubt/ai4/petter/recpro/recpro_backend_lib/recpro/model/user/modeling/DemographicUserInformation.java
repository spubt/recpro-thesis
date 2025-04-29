package de.ubt.ai4.petter.recpro.recpro_backend_lib.recpro.model.user.modeling;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
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

public class DemographicUserInformation {

    @Id
    @Builder.Default
    private String id = UUID.randomUUID().toString();

    @Builder.Default
    private Instant birthDate = Instant.now();

}
