import {Component, Input} from '@angular/core';
import {NumericActivityParameter, NumericActivityParameterInstance} from '@recprocess/recpro-frontend-lib';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatModule} from '../../../../../util/mat/mat.module';

@Component({
  selector: 'app-numeric-activity-parameter',
  imports: [
    MatModule,
    ReactiveFormsModule,
    FormsModule
  ],
  templateUrl: './numeric-activity-parameter.component.html',
  standalone: true,
  styleUrl: './numeric-activity-parameter.component.scss'
})
export class NumericActivityParameterComponent {

  @Input() activityParameter: NumericActivityParameter = new NumericActivityParameter();
  @Input() activityParameterInstance: NumericActivityParameterInstance = new NumericActivityParameterInstance();
  @Input() executable: boolean = false;
}
