package de.ubt.ai4.petter.recpro.recpro_backend_lib.recpro.model.ercData.activityParameter.execution;

import com.fasterxml.jackson.annotation.JsonSubTypes;
import com.fasterxml.jackson.annotation.JsonTypeInfo;
import de.ubt.ai4.petter.recpro.recpro_backend_lib.recpro.model.bpm.execution.RecproTaskInstance;
import de.ubt.ai4.petter.recpro.recpro_backend_lib.recpro.model.ercData.activityParameter.ParameterType;
import de.ubt.ai4.petter.recpro.recpro_backend_lib.recpro.model.ercData.activityParameter.modeling.AbstractActivityParameter;
import de.ubt.ai4.petter.recpro.recpro_backend_lib.recpro.model.recpro.modeling.activityParameter.ActivityParameterConfigurationType;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.experimental.SuperBuilder;

import java.util.Objects;
import java.util.UUID;


@Entity
@Data
@SuperBuilder
@NoArgsConstructor
@AllArgsConstructor
@Inheritance(strategy = InheritanceType.JOINED)

@JsonTypeInfo(
        use = JsonTypeInfo.Id.NAME,
        property = "parameterType",
        visible = true
)

@JsonSubTypes({
        @JsonSubTypes.Type(
                value = BinaryActivityParameterInstance.class,
                name = "BINARY"
        ),@JsonSubTypes.Type(
        value = ComplexActivityParameterInstance.class,
        name = "COMPLEX"
),
        @JsonSubTypes.Type(
                value = DateActivityParameterInstance.class,
                name = "DATE"
        ),
        @JsonSubTypes.Type(
                value = NumericActivityParameterInstance.class,
                name = "NUMERIC"
        ),
        @JsonSubTypes.Type(
                value = TextualActivityParameterInstance.class,
                name = "TEXTUAL"
        ),
})
public abstract class AbstractActivityParameterInstance {

    @Id
    @Builder.Default
    private String id = UUID.randomUUID().toString();

    @Enumerated(EnumType.STRING)
    private ParameterType parameterType;

    @ManyToOne
    private AbstractActivityParameter activityParameter;

    @ManyToOne
    private RecproTaskInstance recproTaskInstance;

    @Enumerated(EnumType.STRING)
    ActivityParameterConfigurationType configurationType = ActivityParameterConfigurationType.OUTPUT;

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        AbstractActivityParameterInstance that = (AbstractActivityParameterInstance) o;
        return Objects.equals(parameterType, that.parameterType) &&
                Objects.equals(activityParameter, that.activityParameter) &&
                configurationType == that.configurationType;
    }

    @Override
    public int hashCode() {
        return Objects.hash(parameterType, activityParameter, configurationType);
    }
}
