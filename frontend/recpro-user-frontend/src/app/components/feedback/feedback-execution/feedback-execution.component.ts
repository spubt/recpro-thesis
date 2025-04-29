import {Component, Inject} from '@angular/core';
import {MatButton} from "@angular/material/button";
import {MatCard, MatCardActions, MatCardContent, MatCardFooter, MatCardHeader} from "@angular/material/card";
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {
  BinaryFeedbackInstance,
  Feedback, FeedbackExecutionComponent,
  FeedbackModelingService,
  FeedbackType, OrdinalFeedbackInstance,
  FeedbackInstance, FeedbackExecutionService, RecproTasklistEntry
} from "@recprocess/recpro-frontend-lib";
import {AuthService} from '../../../auth/auth.service';
import {take} from 'rxjs';

@Component({
  selector: 'app-feedback-execution',
  imports: [
    MatButton,
    MatCard,
    MatCardActions,
    MatCardContent,
    MatCardFooter,
    MatCardHeader,
    FeedbackExecutionComponent,
  ],
  templateUrl: './feedback-execution.component.html',
  standalone: true,
  styleUrl: './feedback-execution.component.scss'
})
export class RecproFeedbackExecutionComponent {

  feedback: Feedback = new Feedback();
  feedbackInstance: FeedbackInstance = new FeedbackInstance();

  constructor(
    private modelingService: FeedbackModelingService,
    private executionService: FeedbackExecutionService,
    @Inject(MAT_DIALOG_DATA) public tasklistEntry: RecproTasklistEntry,
    private dialogRef: MatDialogRef<RecproFeedbackExecutionComponent>,
    private userService: AuthService
  ) {
    this.modelingService.getActive().subscribe((result) => {
      this.feedback = result;
      switch (result.feedbackType) {
        case FeedbackType.BINARY:
          this.feedbackInstance = new BinaryFeedbackInstance();
          break;
        case FeedbackType.ORDINAL:
          this.feedbackInstance = new OrdinalFeedbackInstance();
          break;
        default:
          this.feedbackInstance = new FeedbackInstance();
          break;
      }
    });
  }

  submit() {
    this.userService.getCurrentUserObservable().pipe(take(1)).subscribe((result) => {
      this.feedbackInstance.user = result;
      this.feedbackInstance.tasklistEntry = this.tasklistEntry;
      this.feedbackInstance.feedback = this.feedback;
      this.feedbackInstance.feedbackType = this.feedback.feedbackType;
      this.feedbackInstance.timestamp = new Date();
      this.executionService.create(this.feedbackInstance).subscribe(res => {
        this.dialogRef.close(res);
      });
    });
  }

}
