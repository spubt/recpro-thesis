package de.ubt.ai4.petter.recpro.recpro_backend_lib.recpro.model.recommendation.execution.userCriteriaInstance;

import com.fasterxml.jackson.annotation.JsonSubTypes;
import com.fasterxml.jackson.annotation.JsonTypeInfo;
import de.ubt.ai4.petter.recpro.recpro_backend_lib.recpro.model.recommendation.execution.userCriteriaInstance.activityParameterUserCriteria.AbstractActParamUserCriteriaInstance;
import de.ubt.ai4.petter.recpro.recpro_backend_lib.recpro.model.recommendation.execution.userCriteriaInstance.environmentalParameterUserCriteria.AbstractEnvParamUserCriteriaInstance;
import de.ubt.ai4.petter.recpro.recpro_backend_lib.recpro.model.recommendation.execution.userCriteriaInstance.metaAttributeUserCriteria.MetaAttributeUserCriteriaInstance;
import de.ubt.ai4.petter.recpro.recpro_backend_lib.recpro.model.recommendation.modeling.userCriteria.UserCriteriaType;
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
@Inheritance(strategy = InheritanceType.JOINED)
@JsonTypeInfo(
        use = JsonTypeInfo.Id.NAME,
        property = "criteriaType",
        visible = true
)

@JsonSubTypes({
        @JsonSubTypes.Type(
                value = AbstractEnvParamUserCriteriaInstance.class,
                name = "ENVIRONMENTAL_PARAMETER"
        ),@JsonSubTypes.Type(
                value = AbstractActParamUserCriteriaInstance.class,
                name = "ACTIVITY_PARAMETER"
        ), @JsonSubTypes.Type(
                value = MetaAttributeUserCriteriaInstance.class,
                name = "META_ATTRIBUTE"
)
})

public abstract class AbstractUserCriteriaInstance {

    @Id
    @Builder.Default
    private String id = UUID.randomUUID().toString();

    @Enumerated(EnumType.STRING)
    private UserCriteriaType criteriaType;

    @Enumerated(EnumType.STRING)
    private ComparisonType comparisonType;
}
