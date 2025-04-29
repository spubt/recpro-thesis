package de.ubt.ai4.petter.recpro.recpro_backend_lib.recpro.model.recpro.modeling.enviornmentalParameter;

import de.ubt.ai4.petter.recpro.recpro_backend_lib.recpro.model.bpm.modeling.Activity;
import de.ubt.ai4.petter.recpro.recpro_backend_lib.recpro.model.ercData.environmentalParameter.modeling.AbstractEnvironmentalParameter;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.ManyToOne;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.UUID;

@Data
@Entity
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class EnvironmentalParameterConfiguration {
    @Id
    @Builder.Default
    private String id = UUID.randomUUID().toString();

    @ManyToOne
    @Builder.Default
    private Activity activity = new Activity();
    @ManyToOne
    private AbstractEnvironmentalParameter parameter;

    private String source;
}
