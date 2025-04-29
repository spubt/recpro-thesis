package de.ubt.ai4.petter.recpro.recpro_backend_lib.recpro.model.ercData.environmentalParameter.execution;

import com.fasterxml.jackson.annotation.JsonSubTypes;
import com.fasterxml.jackson.annotation.JsonTypeInfo;
import de.ubt.ai4.petter.recpro.recpro_backend_lib.recpro.model.bpm.execution.RecproTaskInstance;
import de.ubt.ai4.petter.recpro.recpro_backend_lib.recpro.model.ercData.activityParameter.ParameterType;
import de.ubt.ai4.petter.recpro.recpro_backend_lib.recpro.model.ercData.environmentalParameter.modeling.AbstractEnvironmentalParameter;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.experimental.SuperBuilder;

import java.util.UUID;

@Entity
@Data
@SuperBuilder
@AllArgsConstructor
@NoArgsConstructor

@JsonTypeInfo(
        use = JsonTypeInfo.Id.NAME,
        property = "parameterType",
        visible = true
)

@JsonSubTypes({
        @JsonSubTypes.Type(
                value = BinaryEnvironmentalParameterInstance.class,
                name = "BINARY"
        ),
        @JsonSubTypes.Type(
                value = DateEnvironmentalParameterInstance.class,
                name = "DATE"
        ),
        @JsonSubTypes.Type(
                value = NumericEnvironmentalParameterInstance.class,
                name = "NUMERIC"
        ),
        @JsonSubTypes.Type(
                value = TextualEnvironmentalParameterInstance.class,
                name = "TEXTUAL"
        ),
})
@Inheritance(strategy = InheritanceType.JOINED)
public abstract class AbstractEnvironmentalParameterInstance {
    @Id
    @Builder.Default
    private String id = UUID.randomUUID().toString();

    @Enumerated(EnumType.STRING)
    private ParameterType parameterType;

    @ManyToOne
    private AbstractEnvironmentalParameter environmentalParameter;

    @ManyToOne
    private RecproTaskInstance recproTaskInstance;
}
