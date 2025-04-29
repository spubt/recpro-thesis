package de.ubt.ai4.petter.recpro.recpro_backend_lib.recpro.model.recpro.modeling.metaAttribute;

import de.ubt.ai4.petter.recpro.recpro_backend_lib.recpro.model.bpm.modeling.Activity;
import de.ubt.ai4.petter.recpro.recpro_backend_lib.recpro.model.ercData.metaAttribute.modeling.MetaAttribute;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.ManyToOne;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.UUID;

@Entity
@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class MetaAttributeConfiguration {
    @Id
    @Builder.Default
    private String id = UUID.randomUUID().toString();

    @ManyToOne
    @Builder.Default
    private Activity activity = new Activity();

    @ManyToOne
    @Builder.Default
    private MetaAttribute metaAttribute = new MetaAttribute();
}
