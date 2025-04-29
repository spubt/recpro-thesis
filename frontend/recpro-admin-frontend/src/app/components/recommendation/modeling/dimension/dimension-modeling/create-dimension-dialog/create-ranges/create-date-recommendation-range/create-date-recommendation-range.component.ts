import {Component, Input, OnChanges, SimpleChanges} from '@angular/core';
import {MatModule} from '../../../../../../../../util/mat/mat.module';
import {DateRecommendationDimensionRange} from '@recprocess/recpro-frontend-lib';
import {MatTableDataSource} from '@angular/material/table';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

@Component({
  selector: 'app-create-date-recommendation-range',
  imports: [
    MatModule,
    ReactiveFormsModule,
    FormsModule
  ],
  templateUrl: './create-date-recommendation-range.component.html',
  standalone: true,
  styleUrl: './create-date-recommendation-range.component.scss'
})
export class CreateDateRecommendationRangeComponent implements OnChanges {


  @Input() ranges: DateRecommendationDimensionRange[] = [];

  displayedColumns: string[] = ["id", "label", "minValue","maxValue", "delete"];
  dataSource = new MatTableDataSource<DateRecommendationDimensionRange>(this.ranges);

  ngOnChanges(changes: SimpleChanges) {
    if(changes['ranges']) {
      this.dataSource.data = this.ranges;
      console.log(this.ranges);
    }
  }

  addRange() {
    this.ranges.push(new DateRecommendationDimensionRange());
    this.dataSource.data = this.ranges;
  }

  delete(range: DateRecommendationDimensionRange) {
    const index = this.ranges.indexOf(range);
    if (index >= 0) {
      this.ranges.splice(index, 1);
      this.dataSource.data = this.ranges;
    }
  }
}
