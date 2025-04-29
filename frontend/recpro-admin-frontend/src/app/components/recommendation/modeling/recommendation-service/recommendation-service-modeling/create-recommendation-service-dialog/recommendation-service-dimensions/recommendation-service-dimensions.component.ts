import {Component, Input, OnChanges, SimpleChanges} from '@angular/core';
import {MatModule} from '../../../../../../../util/mat/mat.module';
import {
  RecommendationDimension,
  RecommendationDimensionModelingService, RecommendationServiceModel,
  RecommendationServiceModelDimension
} from '@recprocess/recpro-frontend-lib';
import {MatTableDataSource} from '@angular/material/table';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {NgForOf, NgIf} from '@angular/common';

@Component({
  selector: 'app-recommendation-service-dimensions',
  imports: [
    MatModule,
    ReactiveFormsModule,
    FormsModule,
    NgForOf,
    NgIf
  ],
  templateUrl: './recommendation-service-dimensions.component.html',
  standalone: true,
  styleUrl: './recommendation-service-dimensions.component.scss'
})
export class RecommendationServiceDimensionsComponent implements OnChanges{

  @Input() recommendationService: RecommendationServiceModel = new RecommendationServiceModel();

  dimensions: RecommendationDimension[] = [];

  displayedColumns: string[] = ["dimension", "weight", "delete"];
  dataSource = new MatTableDataSource<RecommendationServiceModelDimension>(this.recommendationService.dimensions);

  selectedDimension: RecommendationDimension = new RecommendationDimension();

  constructor(
    private dimensionService: RecommendationDimensionModelingService,
  ) {
    this.dimensionService.getAll().subscribe(res => this.dimensions = res);
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['recommendationService']) {
      this.dataSource.data = this.recommendationService.dimensions;
    }
  }

  addDimension() {
    const dimension = new RecommendationServiceModelDimension();
    dimension.recommendationDimension = this.selectedDimension;
    this.recommendationService.dimensions.push(dimension);
    this.dataSource.data = this.recommendationService.dimensions;
  }

  delete(dimension: RecommendationServiceModelDimension) {
    const index = this.recommendationService.dimensions.indexOf(dimension);
    if (index >= 0) {
      this.recommendationService.dimensions.splice(index, 1);
      this.dataSource.data = this.recommendationService.dimensions;
    }
  }

}
