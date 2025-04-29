import {Component, OnInit} from '@angular/core';
import {MatModule} from '../../../../util/mat/mat.module';
import {BarChartModule} from '@swimlane/ngx-charts';
import {RecommendationAnalysis} from '../model/RecommendationAnalysis';
import {NgForOf} from '@angular/common';
import {HistogramComponent} from './histogram/histogram.component';
import {DialogService} from '@recprocess/recpro-frontend-lib';
import {
  CreateRecommendationAnalysisDialogComponent
} from '../create-recommendation-analysis-dialog/create-recommendation-analysis-dialog.component';
import {HttpClient} from '@angular/common/http';
import {FormsModule} from '@angular/forms';

@Component({
  selector: 'app-recommendation-analysis',
  imports: [
    MatModule,
    BarChartModule,
    NgForOf,
    HistogramComponent,
    FormsModule
  ],
  standalone: true,
  templateUrl: './recommendation-analysis.component.html',
  styleUrl: './recommendation-analysis.component.scss'
})
export class RecommendationAnalysisComponent implements OnInit {

  analysis: RecommendationAnalysis[] = [];

  constructor(
    private dialogService: DialogService,
    private http: HttpClient,
  ) {
  }



  addAnalysis() {
    this.dialogService.open(CreateRecommendationAnalysisDialogComponent, new RecommendationAnalysis());
  }

  deleteSelected() {

  }

  ngOnInit(): void {
    this.http.get<RecommendationAnalysis[]>('http://localhost:8080/api/recommendation/analysis/getAll').subscribe(res =>this.analysis = res);
  }


}
