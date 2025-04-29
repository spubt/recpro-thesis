package de.ubt.ai4.petter.recpro.recpro_backend_lib.recpro.model.recommendation.execution.recommendationServiceInstance;

import de.ubt.ai4.petter.recpro.recpro_backend_lib.recpro.model.recommendation.execution.userCriteriaInstance.activityParameterUserCriteria.AbstractActParamUserCriteriaInstance;
import de.ubt.ai4.petter.recpro.recpro_backend_lib.recpro.model.recommendation.execution.userCriteriaInstance.environmentalParameterUserCriteria.AbstractEnvParamUserCriteriaInstance;
import de.ubt.ai4.petter.recpro.recpro_backend_lib.recpro.model.recommendation.execution.userCriteriaInstance.metaAttributeUserCriteria.MetaAttributeUserCriteriaInstance;
import de.ubt.ai4.petter.recpro.recpro_backend_lib.recpro.model.recommendation.modeling.userCriteria.activityParameterUserCriteria.AbstractActParamUserCriteria;
import de.ubt.ai4.petter.recpro.recpro_backend_lib.recpro.model.recommendation.modeling.userCriteria.environmentalParameterUserCriteria.AbstractEnvParamUserCriteria;
import de.ubt.ai4.petter.recpro.recpro_backend_lib.recpro.model.recommendation.modeling.userCriteria.metaAttributeUserCriteria.MetaAttributeUserCriteria;
import jakarta.persistence.*;
import lombok.*;
import lombok.experimental.SuperBuilder;
import org.hibernate.annotations.Cascade;
import org.hibernate.annotations.CascadeType;

import java.util.ArrayList;
import java.util.List;

@EqualsAndHashCode(callSuper = true)
@Entity
@Data
@SuperBuilder
@AllArgsConstructor
@NoArgsConstructor

@DiscriminatorValue("KNOWLEDGE_BASED")
public class KnowledgeBasedRecommendationServiceInstance extends AbstractRecommendationServiceInstance {

    @OneToMany
    @Builder.Default
            @Cascade(CascadeType.ALL)
    @JoinTable(
            name = "recpro_kbrsi_ap_user_criteria",
            joinColumns = @JoinColumn(name = "kbrsi_id"),
            inverseJoinColumns = @JoinColumn(name = "ap_user_criteria_id")
    )
    List<AbstractActParamUserCriteria> actParamUserCriteria = new ArrayList<>();


    @OneToMany
    @Builder.Default
    @Cascade(CascadeType.ALL)
    @JoinTable(
            name = "recpro_kbrsi_ep_user_criteria",
            joinColumns = @JoinColumn(name = "kbrsi_id"),
            inverseJoinColumns = @JoinColumn(name = "ep_user_criteria_id")
    )
    List<AbstractEnvParamUserCriteria> envParamUserCriteria = new ArrayList<>();


    @OneToMany
    @Builder.Default
    @Cascade(CascadeType.ALL)
    @JoinTable(
            name = "recpro_kbrsi_ma_user_criteria",
            joinColumns = @JoinColumn(name = "kbrsi_id"),
            inverseJoinColumns = @JoinColumn(name = "ma_user_criteria_id")
    )
    List<MetaAttributeUserCriteria> metaAttributeUserCriteria = new ArrayList<>();

    @OneToMany
    @Builder.Default
    @Cascade(CascadeType.ALL)
    @JoinTable(
            name = "recpro_kbrsi_ap_user_criteria_instance",
            joinColumns = @JoinColumn(name = "kbrsi_id"),
            inverseJoinColumns = @JoinColumn(name = "ap_user_criteria_instance_id")
    )
    List<AbstractActParamUserCriteriaInstance> actParamUserCriteriaInstance = new ArrayList<>();


    @OneToMany
    @Builder.Default
    @Cascade(CascadeType.ALL)
    @JoinTable(
            name = "recpro_kbrsi_ep_user_criteria_instance",
            joinColumns = @JoinColumn(name = "kbrsi_id"),
            inverseJoinColumns = @JoinColumn(name = "ep_user_criteria_instance_id")
    )
    List<AbstractEnvParamUserCriteriaInstance> envParamUserCriteriaInstance = new ArrayList<>();


    @OneToMany
    @Builder.Default
    @Cascade(CascadeType.ALL)
    @JoinTable(
            name = "recpro_kbrsi_ma_user_criteria_instance",
            joinColumns = @JoinColumn(name = "kbrsi_id"),
            inverseJoinColumns = @JoinColumn(name = "ma_user_criteria_instance_id")
    )
    List<MetaAttributeUserCriteriaInstance> metaAttributeUserCriteriaInstance = new ArrayList<>();

    OrderBy orderBy;
    OrderDirection orderDirection;

}
