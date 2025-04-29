import {Component, Input} from '@angular/core';
import {NumericActivityParameter} from '@recprocess/recpro-frontend-lib';
import {MatModule} from '../../../../../../util/mat/mat.module';
import {FormsModule} from '@angular/forms';

@Component({
  selector: 'app-create-numeric-activity-parameter',
  imports: [
    MatModule,
    FormsModule
  ],
  templateUrl: './create-numeric-activity-parameter.component.html',
  standalone: true,
  styleUrl: './create-numeric-activity-parameter.component.scss'
})
export class CreateNumericActivityParameterComponent {

  @Input() parameter: NumericActivityParameter = new NumericActivityParameter();

}
