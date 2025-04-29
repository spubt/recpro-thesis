package de.ubt.ai4.petter.recpro.recpro_backend_lib.recpro.model.bpm.execution;

import com.fasterxml.jackson.annotation.JsonBackReference;
import de.ubt.ai4.petter.recpro.recpro_backend_lib.recpro.model.ercData.activityParameter.execution.AbstractActivityParameterInstance;
import de.ubt.ai4.petter.recpro.recpro_backend_lib.recpro.model.ercData.environmentalParameter.execution.AbstractEnvironmentalParameterInstance;
import de.ubt.ai4.petter.recpro.recpro_backend_lib.recpro.model.explanation.execution.model.AbstractExplanationInstance;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.hibernate.annotations.Cascade;
import org.hibernate.annotations.CascadeType;

import java.util.List;
import java.util.Objects;
import java.util.UUID;

@Data
@Entity
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class RecproTasklistEntry {
    @Id
    @Builder.Default
    private String id = UUID.randomUUID().toString();

    @ManyToOne
    @Cascade(CascadeType.ALL)
    private RecproTaskInstance recproTaskInstance;

    @ManyToOne
    @JsonBackReference
    private RecproTasklist recproTasklist;

    @OneToMany
    @Cascade(CascadeType.ALL)
    private List<AbstractActivityParameterInstance> activityParameterInstances;

    @OneToMany
    @Cascade(CascadeType.ALL)
    private List<AbstractEnvironmentalParameterInstance> environmentalParameterInstances;

    @OneToOne
    @Cascade(CascadeType.ALL)
    private AbstractExplanationInstance explanation;

    private int position;
    private int priority;
    private boolean visible;

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        RecproTasklistEntry that = (RecproTasklistEntry) o;

        if (!Objects.equals(recproTaskInstance.getActivity(), that.recproTaskInstance.getActivity())) {
            return false;
        }

        return  compareParameterInstances(activityParameterInstances, that.activityParameterInstances);
    }

    private boolean compareParameterInstances(List<AbstractActivityParameterInstance> list1, List<AbstractActivityParameterInstance> list2) {
        if (list1.size() != list2.size()) {
            return false;
        }
        for (AbstractActivityParameterInstance item1 : list1) {
            boolean matchFound = false;
            for (AbstractActivityParameterInstance item2 : list2) {
                if (item1.equals(item2)) {
                    matchFound = true;
                    break;
                }
            }
            if (!matchFound) {
                return false;
            }
        }
        return true;
    }

    @Override
    public int hashCode() {
        return Objects.hash(recproTaskInstance.getActivity(), activityParameterInstances);
    }
}
