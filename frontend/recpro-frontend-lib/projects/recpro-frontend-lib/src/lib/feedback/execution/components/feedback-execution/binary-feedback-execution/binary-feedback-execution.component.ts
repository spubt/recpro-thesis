import {Component, Input} from '@angular/core';
import {BinaryFeedbackInstance} from '../../../model';
import {FormsModule} from '@angular/forms';
import {BinaryFeedback} from '../../../../modeling';
import {MatRadioButton, MatRadioGroup} from '@angular/material/radio';

@Component({
  selector: 'lib-binary-feedback-execution',
  imports: [
    FormsModule,
    MatRadioGroup,
    MatRadioButton
  ],
  templateUrl: './binary-feedback-execution.component.html',
  styleUrl: './binary-feedback-execution.component.css'
})
export class BinaryFeedbackExecutionComponent {
  @Input() binaryFeedbackInstance: BinaryFeedbackInstance = new BinaryFeedbackInstance();
  @Input() binaryFeedback: BinaryFeedback = new BinaryFeedback();
}
