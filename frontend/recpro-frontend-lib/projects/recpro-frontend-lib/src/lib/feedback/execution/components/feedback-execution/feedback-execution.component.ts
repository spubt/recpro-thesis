import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Feedback, FeedbackType} from '../../../modeling';
import {FeedbackService} from '../../../service';
import {NgSwitch, NgSwitchCase} from '@angular/common';
import {MatCard, MatCardContent, MatCardHeader, MatCardTitle} from '@angular/material/card';
import {MatDivider} from '@angular/material/divider';
import {BinaryFeedbackExecutionComponent} from './binary-feedback-execution/binary-feedback-execution.component';
import {OrdinalFeedbackExecutionComponent} from './ordinal-feedback-execution/ordinal-feedback-execution.component';
import {
  IntervalBasedFeedbackExecutionComponent
} from './interval-based-feedback-execution/interval-based-feedback-execution.component';
import {FeedbackInstance} from '../../model';

@Component({
  selector: 'lib-feedback-execution',
  imports: [
    NgSwitch,
    MatCard,
    MatCardHeader,
    MatDivider,
    MatCardTitle,
    MatCardContent,
    NgSwitchCase,
    BinaryFeedbackExecutionComponent,
    OrdinalFeedbackExecutionComponent,
    IntervalBasedFeedbackExecutionComponent
  ],
  templateUrl: './feedback-execution.component.html',
  styleUrl: './feedback-execution.component.css'
})
export class FeedbackExecutionComponent {
  feedback: Feedback = new Feedback();
  @Input('feedback') set feedbackInput(value: Feedback) {
    this.feedback = value;
  }

  feedbackInstance: FeedbackInstance = new FeedbackInstance();

  @Input('feedbackInstance') set feedbackInstanceInput(value: FeedbackInstance) {
    this.feedbackInstance = value;
  }

  @Output() feedbackChange = new EventEmitter<Feedback>();

  constructor(
    public feedbackService: FeedbackService,
  ) {
  }

  protected readonly FeedbackType = FeedbackType;
}
