import {Component, Input, OnChanges, SimpleChanges} from '@angular/core';
import {MatModule} from '../../../../../../../../util/mat/mat.module';
import {TextualRecommendationDimensionRange} from '@recprocess/recpro-frontend-lib';
import {MatTableDataSource} from '@angular/material/table';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

@Component({
  selector: 'app-create-textual-recommendation-range',
  imports: [
    MatModule,
    ReactiveFormsModule,
    FormsModule
  ],
  templateUrl: './create-textual-recommendation-range.component.html',
  standalone: true,
  styleUrl: './create-textual-recommendation-range.component.scss'
})
export class CreateTextualRecommendationRangeComponent implements OnChanges {

  @Input() ranges: TextualRecommendationDimensionRange[] = [];

  displayedColumns: string[] = ["id", "label", "value", "delete"];
  dataSource = new MatTableDataSource<TextualRecommendationDimensionRange>(this.ranges);

  constructor() {
  }

  ngOnChanges(changes: SimpleChanges) {
    if(changes['ranges']) {
      this.dataSource.data = this.ranges;
    }
  }

  addRange() {
    this.ranges.push(new TextualRecommendationDimensionRange());
    this.dataSource.data = this.ranges;
  }

  deleteRange(range: TextualRecommendationDimensionRange) {
    const index = this.ranges.indexOf(range);
    if (index >= 0) {
      this.ranges.splice(index, 1);
      this.dataSource.data = this.ranges;
    }
  }
}
