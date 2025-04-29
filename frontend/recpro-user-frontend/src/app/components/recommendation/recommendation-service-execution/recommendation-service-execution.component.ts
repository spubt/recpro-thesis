import {Component, EventEmitter, Input, Output} from '@angular/core';
import {RecommendationServiceModel, RecommendationServiceModelingService} from '@recprocess/recpro-frontend-lib';
import {NgClass, NgForOf} from '@angular/common';
import {MatModule} from '../../../util/mat/mat.module';

@Component({
  selector: 'app-recommendation-service-execution',
  imports: [
    NgForOf,
    MatModule,
    NgClass,
  ],
  templateUrl: './recommendation-service-execution.component.html',
  standalone: true,
  styleUrl: './recommendation-service-execution.component.scss'
})
export class RecommendationServiceExecutionComponent {

  recommendationServices: RecommendationServiceModel[] = [];

  @Input() activeRecommendationService: RecommendationServiceModel | undefined;

  @Output() setActiveRecommendationService = new EventEmitter<RecommendationServiceModel>();


  constructor(
    private recommendationServiceModelingService: RecommendationServiceModelingService,
  ) {
    this._getRecommendationServices();
    console.log(this.activeRecommendationService);
  }

  private _getRecommendationServices() {
    this.recommendationServiceModelingService.getAll().subscribe(res => {
      this.recommendationServices = res;
    });
  }

  useRecommendationService(recommendationService: RecommendationServiceModel) {
    this.setActiveRecommendationService.emit(recommendationService);
  }
}
