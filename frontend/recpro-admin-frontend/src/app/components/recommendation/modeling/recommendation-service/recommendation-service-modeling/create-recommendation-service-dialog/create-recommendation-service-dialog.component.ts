import {Component, Inject} from '@angular/core';
import {MatModule} from '../../../../../../util/mat/mat.module';
import {
  RecommendationServiceModel,
  RecommendationServiceModelingService,
  RecommendationServiceModelType
} from '@recprocess/recpro-frontend-lib';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {FormsModule} from '@angular/forms';
import {JsonPipe, NgForOf} from '@angular/common';
import {
  RecommendationServiceDimensionsComponent
} from './recommendation-service-dimensions/recommendation-service-dimensions.component';

@Component({
  selector: 'app-create-recommendation-service-dialog',
  imports: [
    MatModule,
    FormsModule,
    NgForOf,
    JsonPipe,
    RecommendationServiceDimensionsComponent
  ],
  templateUrl: './create-recommendation-service-dialog.component.html',
  standalone: true,
  styleUrl: './create-recommendation-service-dialog.component.scss'
})
export class CreateRecommendationServiceDialogComponent {

  recommendationServiceTypes = Object.values(RecommendationServiceModelType);

  constructor(
    @Inject(MAT_DIALOG_DATA) public recommendationServiceModel: RecommendationServiceModel,
    private modelingService: RecommendationServiceModelingService,

    private dialogRef: MatDialogRef<CreateRecommendationServiceDialogComponent>,
  ) {
    if (this.recommendationServiceModel === null || this.recommendationServiceModel === undefined) {
      this.recommendationServiceModel = new RecommendationServiceModel();
    }

  }



  save() {
    this.modelingService.create(this.recommendationServiceModel).subscribe(() => {
      this.dialogRef.close();
    });
  }

}
