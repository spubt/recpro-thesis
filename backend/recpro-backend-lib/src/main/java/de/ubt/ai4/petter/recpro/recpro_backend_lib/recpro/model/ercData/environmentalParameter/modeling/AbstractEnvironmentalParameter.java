package de.ubt.ai4.petter.recpro.recpro_backend_lib.recpro.model.ercData.environmentalParameter.modeling;

import com.fasterxml.jackson.annotation.JsonSubTypes;
import com.fasterxml.jackson.annotation.JsonTypeInfo;
import de.ubt.ai4.petter.recpro.recpro_backend_lib.recpro.model.ercData.activityParameter.ParameterType;
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
                value = BinaryEnvironmentalParameter.class,
                name = "BINARY"
        ),
        @JsonSubTypes.Type(
                value = DateEnvironmentalParameter.class,
                name = "DATE"
        ),
        @JsonSubTypes.Type(
                value = NumericEnvironmentalParameter.class,
                name = "NUMERIC"
        ),
        @JsonSubTypes.Type(
                value = TextualEnvironmentalParameter.class,
                name = "TEXTUAL"
        ),
})
public abstract class AbstractEnvironmentalParameter {
    @Id
    @Builder.Default
    private String id = UUID.randomUUID().toString();
    private String label;
    private String description;
    private String source;
    private String bpmsAttributeId;
    private String visibility;
    @Enumerated(EnumType.STRING)
    private ParameterType parameterType;
}
