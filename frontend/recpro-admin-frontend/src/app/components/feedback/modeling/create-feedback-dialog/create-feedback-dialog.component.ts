import {Component, Inject, ViewChild} from '@angular/core';
import {MatModule} from '../../../../util/mat/mat.module';
import {FormsModule} from '@angular/forms';
import {
  Feedback, FeedbackExecutionComponent,

  FeedbackLabelType, FeedbackModelingService, FeedbackService,
  FeedbackType,
} from '@recprocess/recpro-frontend-lib';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {NgForOf, NgIf} from '@angular/common';
import {OrdinalOptionTableComponent} from './ordinal-option-table/ordinal-option-table.component';

@Component({
  selector: 'app-create-feedback-dialog',
  imports: [
    MatModule,
    FormsModule,
    NgForOf,
    NgIf,
    OrdinalOptionTableComponent,
    FeedbackExecutionComponent
  ],
  standalone: true,
  templateUrl: './create-feedback-dialog.component.html',
  styleUrl: './create-feedback-dialog.component.scss'
})
export class CreateFeedbackDialogComponent {

  @ViewChild(OrdinalOptionTableComponent) ordinalOptionTable: OrdinalOptionTableComponent;

  feedbackTypes = Object.values(FeedbackType);
  labelTypes = Object.values(FeedbackLabelType);

  values: number[] = [];
  steps: number[] = [];

  constructor(
    @Inject(MAT_DIALOG_DATA) public feedback: Feedback,
    private dialogRef: MatDialogRef<CreateFeedbackDialogComponent>,
    public service: FeedbackService,
    private feedbackModelingService: FeedbackModelingService
  ) {
    this.values = Array.from({ length: 1000 }, (_, i) => i + 1);
    this.steps = Array.from({ length: 101 }, (_, i) => parseFloat((i * 0.1).toFixed(1)));
    if (this.feedback === null || this.feedback === undefined) {
      this.feedback = new Feedback();
    }
  }

  addOrdinalOptions() {
    this.ordinalOptionTable.addElement();
  }

  save() {
    console.log(this.feedback);
    this.feedbackModelingService.create(this.feedback).subscribe(res => {
      console.log(res);
      this.dialogRef.close();
    });
  }
}
