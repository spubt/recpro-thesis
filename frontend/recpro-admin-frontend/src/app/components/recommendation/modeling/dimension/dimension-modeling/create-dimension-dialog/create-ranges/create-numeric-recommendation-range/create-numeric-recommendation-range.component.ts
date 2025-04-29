import {Component, Input, OnChanges, SimpleChanges} from '@angular/core';
import {MatModule} from '../../../../../../../../util/mat/mat.module';
import {
  NumericRecommendationDimensionRange,
} from '@recprocess/recpro-frontend-lib';
import {MatTableDataSource} from '@angular/material/table';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

@Component({
  selector: 'app-create-numeric-recommendation-range',
  imports: [
    MatModule,
    ReactiveFormsModule,
    FormsModule
  ],
  templateUrl: './create-numeric-recommendation-range.component.html',
  standalone: true,
  styleUrl: './create-numeric-recommendation-range.component.scss'
})
export class CreateNumericRecommendationRangeComponent  implements OnChanges {

  @Input() ranges: NumericRecommendationDimensionRange[] = [];
  displayedColumns: string[] = ["id", "label", "minValue", "maxValue", "delete"];
  dataSource = new MatTableDataSource<NumericRecommendationDimensionRange>(this.ranges);

  ngOnChanges(changes: SimpleChanges) {
    if(changes['ranges']) {
      this.dataSource.data = this.ranges;
      console.log(this.ranges);
    }
  }

  addRange() {
    this.ranges.push(new NumericRecommendationDimensionRange());
    this.dataSource.data = this.ranges;
  }

  deleteRange(range: NumericRecommendationDimensionRange) {
    const index = this.ranges.indexOf(range);
    if (index >= 0) {
      this.ranges.splice(index, 1);
      this.dataSource.data = this.ranges;
    }
  }
}
