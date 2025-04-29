import {Component, Inject} from '@angular/core';
import {MatModule} from '../../../../util/mat/mat.module';
import {MAT_DIALOG_DATA} from '@angular/material/dialog';
import {KnowledgeBasedRecommendationServiceInstance} from '@recprocess/recpro-frontend-lib';
import {KbrMetaAttributesComponent} from './kbr-meta-attributes/kbr-meta-attributes.component';
import {KbrActivityParametersComponent} from './kbr-activity-parameters/kbr-activity-parameters.component';
import {
  KbrEnvironmentalParametersComponent
} from './kbr-environmental-parameters/kbr-environmental-parameters.component';
import {MatTabBody} from '@angular/material/tabs';

@Component({
  selector: 'app-knowledge-based-recommendation-service-dialog',
  imports: [
    MatModule,
    KbrMetaAttributesComponent,
    KbrActivityParametersComponent,
    KbrEnvironmentalParametersComponent,
  ],
  templateUrl: './knowledge-based-recommendation-service-dialog.component.html',
  standalone: true,
  styleUrl: './knowledge-based-recommendation-service-dialog.component.scss'
})
export class KnowledgeBasedRecommendationServiceDialogComponent {

  recommendationServiceInstance: KnowledgeBasedRecommendationServiceInstance = new KnowledgeBasedRecommendationServiceInstance();

  constructor(
    @Inject(MAT_DIALOG_DATA) recommendationServiceInstance: KnowledgeBasedRecommendationServiceInstance
  ) {
    this.recommendationServiceInstance = recommendationServiceInstance;
  }

  save() {
    console.log(this.recommendationServiceInstance);
    console.log(this.recommendationServiceInstance.actParamUserCriteria);
  }
}
