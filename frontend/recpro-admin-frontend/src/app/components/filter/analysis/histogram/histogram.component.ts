import {Component, OnInit} from '@angular/core';
import {Color, NgxChartsModule, ScaleType} from '@swimlane/ngx-charts';

@Component({
  selector: 'app-histogram',
  imports: [
    NgxChartsModule
  ],
  standalone: true,
  templateUrl: './histogram.component.html',
  styleUrl: './histogram.component.scss'
})
export class HistogramComponent implements OnInit {
  histogramData: {name: string, value: number}[] = [];

  colorScheme: Color = {
    domain: ['darkGrey'],
    group: ScaleType.Ordinal,
    selectable: true,
    name: 'CustomColor'
  };

  ngOnInit(): void {
    this.createBarChart();
  }

  private createBarChart() {
    const data = [-1.5, -1.2, 0.3, 0.7, 1.1, 2.5, 2.9, 3.4, 3.9, 0, -0.5, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1];
    const bins = [-2, -1, 0, 1, 2, 3, 4]; // Grenzen der Intervalle
    this.histogramData = bins.slice(0, -1).map((bin, index) => {
      return {
        name: `${bins[index]} to ${bins[index + 1]}`,
        value: data.filter(d => d >= bin && d < bins[index + 1]).length,
      };
    });
  }
}
