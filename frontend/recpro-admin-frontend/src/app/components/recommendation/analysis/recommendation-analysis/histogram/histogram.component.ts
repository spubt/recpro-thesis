import {Component, Input, OnInit} from '@angular/core';
import {BarChartModule, Color, ScaleType} from '@swimlane/ngx-charts';
import {RecommendationAnalysis} from '../../model/RecommendationAnalysis';
import {FeedbackType, OrdinalFeedback, OrdinalOption} from '@recprocess/recpro-frontend-lib';
import {FormsModule} from '@angular/forms';
import {MatCard, MatCardContent, MatCardHeader} from '@angular/material/card';
import {MatFormField, MatInput, MatLabel} from '@angular/material/input';

@Component({
  selector: 'app-histogram',
  imports: [
    BarChartModule,
    FormsModule,
    MatCard,
    MatCardContent,
    MatCardHeader,
    MatFormField,
    MatInput,
    MatLabel
  ],
  templateUrl: './histogram.component.html',
  styleUrl: './histogram.component.scss'
})
export class HistogramComponent implements OnInit {

  analysis: RecommendationAnalysis = new RecommendationAnalysis();

  @Input() set analysisInput(analysis: RecommendationAnalysis) {

    let bins: number[] = [];
    switch (analysis.feedback.feedbackType) {
      case FeedbackType.ORDINAL: bins = this.createBinsByOrdinalOptions((analysis.feedback as OrdinalFeedback).options)
    }
    console.log(bins);
    this.createBarChart(analysis.data, bins);
    this.analysis = analysis;
    console.log(analysis.data);
  };

  histogramData: {name: string, value: number}[] = [];

  colorScheme: Color = {
    domain: ['darkGrey'],
    group: ScaleType.Ordinal,
    selectable: true,
    name: 'CustomColor'
  };

  ngOnInit(): void {
    // this.createBarChart();
  }

  private createBarChart(data: number[], bins: number[]) {
    // const data = [-1.5, -1.2, 0.3, 0.7, 1.1, 2.5, 2.9, 3.4, 3.9, 0, -0.5, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1];
    // const bins = [-10, -9, -8, -7, -6, -5, -3, -2, -1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]; // Grenzen der Intervalle
    this.histogramData = bins.slice(0, -1).map((bin, index) => {
      return {
        name: `${bins[index]}`,
        value: data.filter(d => d >= bin && d < bins[index + 1]).length,
      };
    });
  }

  private createBinsByOrdinalOptions(options: OrdinalOption[]): number[] {
    const neg = options.slice().sort((a, b) => b.position - a.position).map(opt => -opt.value);
    const pos = options.slice().sort((a, b) => a.position - b.position).map(opt => opt.value);
    return [...neg, 0, ...pos];
  }
}
