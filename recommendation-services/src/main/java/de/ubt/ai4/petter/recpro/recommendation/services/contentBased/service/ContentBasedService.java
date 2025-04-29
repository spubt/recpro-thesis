package de.ubt.ai4.petter.recpro.recommendation.services.contentBased.service;

import de.ubt.ai4.petter.recpro.recommendation.services.contentBased.model.SimilarActivityInfo;
import de.ubt.ai4.petter.recpro.recpro_backend_lib.recpro.model.bpm.execution.RecproTasklist;
import de.ubt.ai4.petter.recpro.recpro_backend_lib.recpro.model.bpm.execution.RecproTasklistEntry;
import de.ubt.ai4.petter.recpro.recpro_backend_lib.recpro.model.bpm.modeling.Activity;
import de.ubt.ai4.petter.recpro.recpro_backend_lib.recpro.model.ercData.metaAttribute.modeling.MetaAttribute;
import de.ubt.ai4.petter.recpro.recpro_backend_lib.recpro.model.explanation.execution.model.AbstractExplanationInstance;
import de.ubt.ai4.petter.recpro.recpro_backend_lib.recpro.model.explanation.execution.model.PotentialFeedbackExplanationInstance;
import de.ubt.ai4.petter.recpro.recpro_backend_lib.recpro.model.feedback.execution.BinaryFeedbackInstance;
import de.ubt.ai4.petter.recpro.recpro_backend_lib.recpro.model.feedback.execution.IntervalBasedFeedbackInstance;
import de.ubt.ai4.petter.recpro.recpro_backend_lib.recpro.model.feedback.execution.OrdinalFeedbackInstance;
import de.ubt.ai4.petter.recpro.recpro_backend_lib.recpro.model.recommendation.execution.recommendationServiceInstance.ContentBasedRecommendationServiceInstance;
import de.ubt.ai4.petter.recpro.recpro_backend_lib.recpro.model.recpro.modeling.metaAttribute.MetaAttributeConfiguration;
import lombok.RequiredArgsConstructor;
import org.apache.commons.math3.linear.ArrayRealVector;
import org.apache.commons.math3.linear.RealVector;
import org.springframework.stereotype.Service;

import java.util.*;
import java.util.stream.Collectors;

@RequiredArgsConstructor
@Service
public class ContentBasedService {

    public RecproTasklist applyRecommendation(ContentBasedRecommendationServiceInstance recommendationServiceInstance) {

        int k = 2;
        Map<Activity, Double> averageRatings = this.calculateAverageRatings(recommendationServiceInstance);

        this.predictFeedback(recommendationServiceInstance, k, averageRatings);

        this.sortTasklistEntries(recommendationServiceInstance);

        recommendationServiceInstance.getTasklist().setRecommendationServiceInstance(recommendationServiceInstance);

        return recommendationServiceInstance.getTasklist();
    }

    private Map<Activity, Double> calculateAverageRatings(ContentBasedRecommendationServiceInstance recommendationServiceInstance) {
        return recommendationServiceInstance.getFeedbackInstances().stream()
                .collect(Collectors.groupingBy(
                        fi -> fi.getTasklistEntry()
                                .getRecproTaskInstance()
                                .getActivity(),
                        Collectors.averagingDouble(fi ->
                                switch (fi.getFeedbackType()) {
                                    case BINARY -> Boolean.TRUE.equals(((BinaryFeedbackInstance) fi).getValue()) ? 1.0 : 0.0;
                                    case INTERVAL_BASED -> ((IntervalBasedFeedbackInstance) fi).getValue();
                                    case ORDINAL -> ((OrdinalFeedbackInstance)fi).getValue().getValue();
                                    default -> 0.0;
                                }
                        )
                ));
    }

    private void predictFeedback(ContentBasedRecommendationServiceInstance recommendationServiceInstance, int k, Map<Activity, Double> averageRatings) {
        recommendationServiceInstance.getTasklist().getEntries().forEach(entry -> {
            Activity targetActivity = entry.getRecproTaskInstance().getActivity();

            double predictedValue = predictRatingForActivity(targetActivity, k, averageRatings, recommendationServiceInstance.getMetaAttributes(), recommendationServiceInstance.getMetaAttributeConfigurations());
            AbstractExplanationInstance explanation = PotentialFeedbackExplanationInstance.builder()
                    .potentialValue(predictedValue)
                    .build();
            entry.setExplanation(explanation);
        });
    }

    private void sortTasklistEntries(ContentBasedRecommendationServiceInstance recommendationServiceInstance) {
        recommendationServiceInstance.getTasklist().getEntries().sort((e1, e2) -> {
            double val1 = ((PotentialFeedbackExplanationInstance) e1.getExplanation()).getPotentialValue();
            double val2 = ((PotentialFeedbackExplanationInstance) e2.getExplanation()).getPotentialValue();
            return Double.compare(val2, val1);
        });

        int position = 1;
        for (RecproTasklistEntry entry : recommendationServiceInstance.getTasklist().getEntries()) {
            entry.setPosition(position++);
            entry.setVisible(true);
        }
    }

    private static RealVector createActivityVector(List<MetaAttributeConfiguration> metaAttributeConfigurations, List<MetaAttribute> metaAttributes) {
        Set<String> metaAttributeIds = new HashSet<>();

        for (MetaAttributeConfiguration config: metaAttributeConfigurations) {
            metaAttributeIds.add(config.getMetaAttribute().getId());
        }

        double[] vector = new double[metaAttributes.size()];
        for (int i = 0; i < metaAttributes.size(); i++) {
            MetaAttribute meta = metaAttributes.get(i);
            vector[i] = metaAttributeIds.contains(meta.getId()) ? 1.0 : 0.0;
        }

        return new ArrayRealVector(vector);
    }

    private static double cosineSimilarity(RealVector v1, RealVector v2) {
        return v1.dotProduct(v2) / (v1.getNorm() * v2.getNorm());
    }

    private double predictRatingForActivity(
            Activity targetActivity,
            int k,
            Map<Activity, Double> averageRatings,
            List<MetaAttribute> allMetaAttributes,
            List<MetaAttributeConfiguration> allMetaAttributeConfigs) {

        List<MetaAttributeConfiguration> targetConfigs = allMetaAttributeConfigs.stream()
                .filter(mac -> mac.getActivity().equals(targetActivity))
                .toList();
        RealVector vTarget = createActivityVector(targetConfigs, allMetaAttributes);

        List<SimilarActivityInfo> similarityInfos = new ArrayList<>();
        averageRatings.forEach((act, rating) -> {

            if (rating == null) {
                rating = 0.0;
            }

            List<MetaAttributeConfiguration> otherConfigs = allMetaAttributeConfigs.stream()
                    .filter(mac -> mac.getActivity().equals(act))
                    .toList();
            RealVector vOther = createActivityVector(otherConfigs, allMetaAttributes);

            double sim = cosineSimilarity(vTarget, vOther);

            if (targetActivity.equals(act)) return;

            if (Double.isNaN(sim)) return;

            similarityInfos.add(new SimilarActivityInfo(act, sim, rating));
        });

        similarityInfos.sort(Comparator.comparingDouble(SimilarActivityInfo::getSimilarity).reversed());

        List<SimilarActivityInfo> topK = similarityInfos.stream()
                .limit(k)
                .toList();

        double numerator = 0.0;
        double denominator = 0.0;

        for (SimilarActivityInfo info : topK) {
            numerator += info.getSimilarity() * info.getRating();
            denominator += info.getSimilarity();
        }

        if (denominator == 0.0) {
            // Falls keine Ähnlichkeiten vorhanden sind, auf 0 oder anderen Default setzen
            return 0.0;
        }
        return numerator / denominator;
    }


}
