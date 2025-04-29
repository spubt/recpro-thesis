package de.ubt.ai4.petter.recpro.recpro_backend_lib.recpro.model.user.modeling;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.Instant;
import java.util.ArrayList;
import java.util.List;
import java.util.UUID;

@Entity
@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class User {
    
    @Id
    @Builder.Default
    private String id = UUID.randomUUID().toString();
    private String email;
    private String firstName;
    private String lastName;
    private Instant createdAt;
    private Instant updatedAt;
    private Instant lastLogin;

    @Enumerated(EnumType.STRING)
    private Gender gender;

    @ElementCollection
    @Builder.Default
    private List<ApplicationRole> roles = new ArrayList<>();

    @OneToOne(cascade = CascadeType.ALL)
    @Builder.Default
    private UserSettings settings = new UserSettings();

    @OneToOne(cascade = CascadeType.ALL)
    @Builder.Default
    private DemographicUserInformation demographicUserInformation = new DemographicUserInformation();

    @Enumerated(EnumType.STRING)
    @Builder.Default
    private UserStatus status = UserStatus.ACTIVE;
}
