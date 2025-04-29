import {Component, Inject, OnInit} from '@angular/core';
import {
  Feedback,
  FeedbackModelingService,
  RecommendationServiceModel,
  RecommendationServiceModelingService
} from "@recprocess/recpro-frontend-lib";
import {
  MAT_DIALOG_DATA, MatDialogRef,
} from "@angular/material/dialog";
import {MatModule} from '../../../../util/mat/mat.module';
import {RecommendationAnalysis} from '../model/RecommendationAnalysis';
import {FormsModule} from '@angular/forms';
import {NgForOf} from '@angular/common';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-create-recommendation-analysis-dialog',
  imports: [
    MatModule,
    FormsModule,
    NgForOf
  ],
  standalone: true,
  templateUrl: './create-recommendation-analysis-dialog.component.html',
  styleUrl: './create-recommendation-analysis-dialog.component.scss'
})
export class CreateRecommendationAnalysisDialogComponent implements OnInit {

  recommendationServices: RecommendationServiceModel[] = [];
  feedbacks: Feedback[] = [];

  constructor(
    @Inject(MAT_DIALOG_DATA) public recommendationAnalysis: RecommendationAnalysis,
    private http: HttpClient,
    private dialogRef: MatDialogRef<CreateRecommendationAnalysisDialogComponent>,
    private recommendationService: RecommendationServiceModelingService,
    private feedbackService: FeedbackModelingService
              ) {
  }

  ngOnInit(): void {
    this.recommendationService.getAll().subscribe(res => this.recommendationServices = res);
    this.feedbackService.getAll().subscribe(res => this.feedbacks = res);
  }

  save() {
    console.log(this.recommendationAnalysis);
    this.http.post<RecommendationAnalysis>('http://localhost:8080/api/recommendation/analysis/create', this.recommendationAnalysis).subscribe(res => console.log(res));
    this.dialogRef.close();
  }
}
