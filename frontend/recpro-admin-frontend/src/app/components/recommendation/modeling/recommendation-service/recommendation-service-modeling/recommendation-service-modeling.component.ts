import { Component } from '@angular/core';
import {
  DialogService,
  RecommendationServiceModel,
  RecommendationServiceModelingService
} from '@recprocess/recpro-frontend-lib';
import {
  CreateRecommendationServiceDialogComponent
} from './create-recommendation-service-dialog/create-recommendation-service-dialog.component';
import {MatModule} from '../../../../../util/mat/mat.module';
import {
  RecommendationServiceModelingTableComponent
} from './recommendation-service-modeling-table/recommendation-service-modeling-table.component';

@Component({
  selector: 'app-recommendation-service-modeling',
  imports: [
    MatModule,
    RecommendationServiceModelingTableComponent
  ],
  templateUrl: './recommendation-service-modeling.component.html',
  standalone: true,
  styleUrl: './recommendation-service-modeling.component.scss'
})
export class RecommendationServiceModelingComponent {

  recommendationServices: RecommendationServiceModel[] = [];

  constructor(
    private dialogService: DialogService,
    private recommendationServiceModelingService:  RecommendationServiceModelingService
  ) {
    this._getRecommendationServiceModels();
  }

  createRecommendationServiceModel() {
    const dialogRef = this.dialogService.open(CreateRecommendationServiceDialogComponent, new RecommendationServiceModel());
    dialogRef.afterClosed().subscribe(() => {
      this._getRecommendationServiceModels();
    });
  }

  private _getRecommendationServiceModels() {
    this.recommendationServiceModelingService.getAll().subscribe(res => {
      this.recommendationServices = res;
    });
  }
}
