import {Component, Input} from '@angular/core';
import {
  ExplanationType,
  PotentialFeedbackExplanationInstance,
  RecproTasklistEntry
} from '@recprocess/recpro-frontend-lib';
import {MatModule} from '../../../../../util/mat/mat.module';
import {DatePipe, NgClass, NgIf} from '@angular/common';

@Component({
  selector: 'app-tasklist-entry',
  imports: [
    MatModule,
    NgClass,
    DatePipe,
    NgIf
  ],
  standalone: true,
  templateUrl: './tasklist-entry.component.html',
  styleUrl: './tasklist-entry.component.scss'
})
export class TasklistEntryComponent {

  isHighlighted: boolean = false;

  @Input() tasklistEntry: RecproTasklistEntry = new RecproTasklistEntry();

  isPotentialRating() {
    return this.tasklistEntry.explanation !== null && this.tasklistEntry.explanation.explanationType === ExplanationType.POTENTIAL_FEEDBACK;
  }

  getPotentialRating() {
    if (this.isPotentialRating()) {
      return (this.tasklistEntry.explanation as PotentialFeedbackExplanationInstance).potentialValue;
    } else {
      return 0;
    }
  }
}
