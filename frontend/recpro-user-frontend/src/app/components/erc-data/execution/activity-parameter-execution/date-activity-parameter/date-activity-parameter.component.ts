import {Component, Input} from '@angular/core';
import {DateActivityParameter, DateActivityParameterInstance} from '@recprocess/recpro-frontend-lib';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatModule} from '../../../../../util/mat/mat.module';
import {NgIf} from '@angular/common';

@Component({
  selector: 'app-date-activity-parameter',
  imports: [
    MatModule,
    ReactiveFormsModule,
    FormsModule,
    NgIf
  ],
  templateUrl: './date-activity-parameter.component.html',
  standalone: true,
  styleUrl: './date-activity-parameter.component.scss'
})
export class DateActivityParameterComponent {

  @Input() activityParameter: DateActivityParameter = new DateActivityParameter();
  @Input() activityParameterInstance: DateActivityParameterInstance = new DateActivityParameterInstance();
  @Input() executable: boolean = false;

}
