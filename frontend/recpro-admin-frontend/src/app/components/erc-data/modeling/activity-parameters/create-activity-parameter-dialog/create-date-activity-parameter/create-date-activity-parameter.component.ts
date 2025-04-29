import {Component, Input} from '@angular/core';
import {DateActivityParameter} from '@recprocess/recpro-frontend-lib';
import {MatModule} from '../../../../../../util/mat/mat.module';
import {FormsModule} from '@angular/forms';

@Component({
  selector: 'app-create-date-activity-parameter',
  imports: [
    MatModule,
    FormsModule
  ],
  templateUrl: './create-date-activity-parameter.component.html',
  standalone: true,
  styleUrl: './create-date-activity-parameter.component.scss'
})
export class CreateDateActivityParameterComponent {

  @Input() parameter: DateActivityParameter = new DateActivityParameter();

}
