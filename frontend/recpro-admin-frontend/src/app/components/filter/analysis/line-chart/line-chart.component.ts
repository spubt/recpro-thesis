import { Component } from '@angular/core';
import {Color, NgxChartsModule, ScaleType} from '@swimlane/ngx-charts';

@Component({
  selector: 'app-line-chart',
  imports: [
    NgxChartsModule
  ],
  standalone: true,
  templateUrl: './line-chart.component.html',
  styleUrl: './line-chart.component.scss'
})
export class LineChartComponent {

  view: [number, number] = [700, 400]; // [Width, Height]

  colorScheme: Color = {
    domain: ['darkGrey', 'green', 'blue', 'red'],
    group: ScaleType.Ordinal,
    selectable: true,
    name: 'CustomColor'
  };

  // Daten für das Diagramm
  data = [
    {
      name: 'Task 1',
      series: [
        { name: '2023-01', value: 40 },
        { name: '2023-02', value: 55 },
        { name: '2023-03', value: 60 },
        { name: '2023-04', value: 70 }
      ]
    },
    {
      name: 'Task 2',
      series: [
        { name: '2023-01', value: 30 },
        { name: '2023-02', value: 45 },
        { name: '2023-03', value: 50 },
        { name: '2023-04', value: 65 }
      ]
    },
    {
      name: 'Task 3',
      series: [
        { name: '2023-01', value: 20 },
        { name: '2023-02', value: 15 },
        { name: '2023-03', value: 59 },
        { name: '2023-04', value: 15 }
      ]
    },
    {
      name: 'Task 4',
      series: [
        { name: '2023-01', value: 0 },
        { name: '2023-02', value: 25 },
        { name: '2023-03', value: 100 },
        { name: '2023-04', value: 2 },
        { name: '2023-05', value: 2 }
      ]
    }
  ];

  // Optionen
  showXAxis = true;
  showYAxis = true;
  gradient = false;
  showLegend = true;
  showXAxisLabel = true;
  xAxisLabel = 'Date';
  showYAxisLabel = true;
  yAxisLabel = 'Selections';
  timeline = true;
}
