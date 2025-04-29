package de.ubt.ai4.petter.recpro.recpro_backend_lib.recpro.model.recpro.modeling.activityParameter;

import de.ubt.ai4.petter.recpro.recpro_backend_lib.recpro.model.bpm.modeling.Activity;
import de.ubt.ai4.petter.recpro.recpro_backend_lib.recpro.model.ercData.activityParameter.modeling.AbstractActivityParameter;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.UUID;

@Entity
@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class ActivityParameterConfiguration {
    @Id
    @Builder.Default
    private String id = UUID.randomUUID().toString();

    @ManyToOne
    private Activity activity;

    @ManyToOne
    private AbstractActivityParameter parameter;

    @Enumerated(EnumType.STRING)
    @Builder.Default
    private ActivityParameterConfigurationType parameterConfigurationType = ActivityParameterConfigurationType.OUTPUT;

    private int position;

    private int width;
    private int height;


}
