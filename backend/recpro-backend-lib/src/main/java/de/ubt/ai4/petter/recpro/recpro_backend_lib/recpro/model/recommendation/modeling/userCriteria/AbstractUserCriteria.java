package de.ubt.ai4.petter.recpro.recpro_backend_lib.recpro.model.recommendation.modeling.userCriteria;

import com.fasterxml.jackson.annotation.JsonSubTypes;
import com.fasterxml.jackson.annotation.JsonTypeInfo;
import de.ubt.ai4.petter.recpro.recpro_backend_lib.recpro.model.recommendation.modeling.userCriteria.activityParameterUserCriteria.AbstractActParamUserCriteria;
import de.ubt.ai4.petter.recpro.recpro_backend_lib.recpro.model.recommendation.modeling.userCriteria.environmentalParameterUserCriteria.AbstractEnvParamUserCriteria;
import de.ubt.ai4.petter.recpro.recpro_backend_lib.recpro.model.recommendation.modeling.userCriteria.metaAttributeUserCriteria.MetaAttributeUserCriteria;
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
        property = "criteriaType",
        visible = true
)

@JsonSubTypes({
        @JsonSubTypes.Type(
                value = AbstractEnvParamUserCriteria.class,
                name = "ENVIRONMENTAL_PARAMETER"
        ),@JsonSubTypes.Type(
            value = AbstractActParamUserCriteria.class,
            name = "ACTIVITY_PARAMETER"
        ), @JsonSubTypes.Type(
            value = MetaAttributeUserCriteria.class,
            name = "META_ATTRIBUTE"
        )
})
public abstract class AbstractUserCriteria {

    @Id
    @Builder.Default
    private String id = UUID.randomUUID().toString();

    @Enumerated(EnumType.STRING)
    private UserCriteriaType criteriaType;
}
