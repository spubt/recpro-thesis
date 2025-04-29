import {Component} from '@angular/core';
import {HistogramComponent} from '../histogram/histogram.component';
import {LineChartComponent} from '../line-chart/line-chart.component';

@Component({
  selector: 'app-filter-analysis',
  imports: [
    HistogramComponent,
    LineChartComponent

  ],
  standalone: true,
  templateUrl: './filter-analysis.component.html',
  styleUrl: './filter-analysis.component.scss'
})
export class FilterAnalysisComponent {


}
