package de.ubt.ai4.petter.recpro.recommendation.services.contentBased.model;

import de.ubt.ai4.petter.recpro.recpro_backend_lib.recpro.model.bpm.modeling.Activity;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class SimilarActivityInfo {
    private Activity activity;
    private double similarity;
    private double rating;
}

