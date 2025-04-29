import {Component, Input} from '@angular/core';
import {MatModule} from '../../../../../../../util/mat/mat.module';
import {
  DateRecommendationDimensionRange, NumericRecommendationDimensionRange,
  ParameterType,
  RecommendationDimension, TextualRecommendationDimensionRange
} from '@recprocess/recpro-frontend-lib';
import {NgIf, NgSwitch, NgSwitchCase} from '@angular/common';
import {
  CreateTextualRecommendationRangeComponent
} from './create-textual-recommendation-range/create-textual-recommendation-range.component';
import {
  CreateNumericRecommendationRangeComponent
} from './create-numeric-recommendation-range/create-numeric-recommendation-range.component';
import {
  CreateDateRecommendationRangeComponent
} from './create-date-recommendation-range/create-date-recommendation-range.component';

@Component({
  selector: 'app-create-ranges',
  imports: [
    MatModule,
    NgIf,
    CreateTextualRecommendationRangeComponent,
    NgSwitchCase,
    NgSwitch,
    CreateNumericRecommendationRangeComponent,
    CreateDateRecommendationRangeComponent
  ],
  templateUrl: './create-ranges.component.html',
  standalone: true,
  styleUrl: './create-ranges.component.scss'
})
export class CreateRangesComponent {
  @Input() dimension: RecommendationDimension = new RecommendationDimension();

  getDateRange() {
    return this.dimension.ranges as DateRecommendationDimensionRange[];
  }

  getTextualRange(){
    return this.dimension.ranges as TextualRecommendationDimensionRange[];
  }

  getNumericRange() {
    return this.dimension.ranges as NumericRecommendationDimensionRange[];
  }

  protected readonly ParameterType = ParameterType;
}
