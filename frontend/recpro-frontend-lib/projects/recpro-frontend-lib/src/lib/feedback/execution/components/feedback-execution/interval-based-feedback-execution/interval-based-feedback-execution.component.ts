import {Component, Input} from '@angular/core';
import {IntervalBasedFeedbackInstance} from '../../../model';
import {IntervalBasedFeedback} from '../../../../modeling';
import {MatSlider, MatSliderThumb} from '@angular/material/slider';

@Component({
  selector: 'lib-interval-based-feedback-execution',
  imports: [
    MatSlider,
    MatSliderThumb

  ],
  templateUrl: './interval-based-feedback-execution.component.html',
  styleUrl: './interval-based-feedback-execution.component.css'
})
export class IntervalBasedFeedbackExecutionComponent {
  @Input() intervalBasedFeedbackInstance: IntervalBasedFeedbackInstance = new IntervalBasedFeedbackInstance();
  @Input() intervalBasedFeedback: IntervalBasedFeedback = new IntervalBasedFeedback();

}
