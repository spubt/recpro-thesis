import {Component, Input} from '@angular/core';
import {OrdinalFeedbackInstance} from '../../../model';

import {FormsModule} from '@angular/forms';
import {OrdinalFeedback} from '../../../../modeling';
import {MatRadioButton, MatRadioGroup} from '@angular/material/radio';
import {NgForOf} from '@angular/common';
import {SortTasklistPipe} from './OrdinalFeedbackPipe';

@Component({
  selector: 'lib-ordinal-feedback-execution',
  imports: [
    FormsModule,
    MatRadioGroup,
    MatRadioButton,
    NgForOf,
    SortTasklistPipe
  ],
  templateUrl: './ordinal-feedback-execution.component.html',
  styleUrl: './ordinal-feedback-execution.component.css'
})
export class OrdinalFeedbackExecutionComponent {
  @Input() ordinalFeedbackInstance: OrdinalFeedbackInstance = new OrdinalFeedbackInstance();
  @Input() ordinalFeedback: OrdinalFeedback = new OrdinalFeedback();

}
