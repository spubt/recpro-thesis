import {Component, Inject} from '@angular/core';
import {MatModule} from '../../../../../../util/mat/mat.module';
import {FormsModule} from '@angular/forms';
import {
  AbstractActivityParameter,
  AbstractEnvironmentalParameter,
  ActivityParameterModelingService, ActivityParameterRecommendationDimension,
  EnvironmentalParameterModelingService, EnvironmentalParameterRecommendationDimension, ParameterType,
  RecommendationDimension,
  RecommendationDimensionModelingService,
  RecommendationDimensionType
} from '@recprocess/recpro-frontend-lib';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {NgForOf, NgIf} from '@angular/common';
import {CreateRangesComponent} from './create-ranges/create-ranges.component';

@Component({
  selector: 'app-create-dimension-dialog',
  imports: [
    MatModule,
    FormsModule,
    NgForOf,
    NgIf,
    CreateRangesComponent,
  ],
  templateUrl: './create-dimension-dialog.component.html',
  standalone: true,
  styleUrl: './create-dimension-dialog.component.scss'
})
export class CreateDimensionDialogComponent {

  dimensionTypes = Object.values(RecommendationDimensionType);

  activityParameters: AbstractActivityParameter[] = [];
  environmentalParameters: AbstractEnvironmentalParameter[] = [];

  parameterTypes = Object.values(ParameterType);

  constructor(
    @Inject(MAT_DIALOG_DATA) public dimension: RecommendationDimension,
    private modelingService: RecommendationDimensionModelingService,
    private dialogRef: MatDialogRef<CreateDimensionDialogComponent>,
    private activityParameterModelingService: ActivityParameterModelingService,
    private environmentalParameterModelingService: EnvironmentalParameterModelingService,
  ) {
    if (this.dimension === null || this.dimension === undefined) {
      this.dimension = new RecommendationDimension();
    }

    console.log(this.dimension);
    this.getActivityParameters();
    this.getEnvironmentalParameters();
  }

  save() {
    console.log(this.dimension);
    this.modelingService.create(this.dimension).subscribe(() => {
      this.dialogRef.close();
    });
  }

  getActivityParameters() {
    this.activityParameterModelingService.getAll().subscribe(res => {
      this.activityParameters = res;
      if (this.isDimensionActivityParameter() && this.getActivityParameterDimension().activityParameter !== undefined && this.getActivityParameterDimension().activityParameter !== null) {
        this.getActivityParameterDimension().activityParameter = res.find(param => param.id === this.getActivityParameterDimension().activityParameter.id)!;
      }
    });
  }

  getEnvironmentalParameters() {
    this.environmentalParameterModelingService.getAll().subscribe(res => {
      this.environmentalParameters = res;
      if (this.isDimensionEnvironmentalParameter() && this.getEnvironmentalParameterDimension().environmentalParameter !== undefined && this.getEnvironmentalParameterDimension().environmentalParameter !== null) {
        this.getEnvironmentalParameterDimension().environmentalParameter = res.find(param => param.id === this.getEnvironmentalParameterDimension().environmentalParameter.id)!;
      }
    });
  }

  changeEnvironmentalParameter() {
    this.dimension.parameterType = this.getEnvironmentalParameterDimension().environmentalParameter.parameterType;
  }

  changeActivityParameter() {
    this.dimension.parameterType = this.getActivityParameterDimension().activityParameter.parameterType;
  }

  isDimensionActivityParameter() {
    return this.dimension.dimensionType === RecommendationDimensionType.ACTIVITY_PARAMETER;
  }

  getActivityParameterDimension() {
    return this.dimension as ActivityParameterRecommendationDimension;
  }

  isDimensionEnvironmentalParameter() {
    return this.dimension.dimensionType === RecommendationDimensionType.ENVIRONMENTAL_PARAMETER;
  }

  getEnvironmentalParameterDimension() {
    return this.dimension as EnvironmentalParameterRecommendationDimension;
  }

  dimensionChange() {
    const temp = this.dimension;
    if (this.dimension.dimensionType === RecommendationDimensionType.ACTIVITY_PARAMETER) {
      this.dimension = new ActivityParameterRecommendationDimension();
      this.dimension.dimensionType = RecommendationDimensionType.ACTIVITY_PARAMETER;
      this.dimension.label = temp.label;
    } else {
      this.dimension = new EnvironmentalParameterRecommendationDimension();
      this.dimension.dimensionType = RecommendationDimensionType.ENVIRONMENTAL_PARAMETER;
      this.dimension.label = temp.label;
    }
  }

}
