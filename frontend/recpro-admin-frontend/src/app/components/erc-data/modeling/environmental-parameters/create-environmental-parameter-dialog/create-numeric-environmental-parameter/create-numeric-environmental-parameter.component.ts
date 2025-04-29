import {Component, Input} from '@angular/core';
import {MatModule} from '../../../../../../util/mat/mat.module';
import {NumericEnvironmentalParameter} from '@recprocess/recpro-frontend-lib';
import {FormsModule} from '@angular/forms';

@Component({
  selector: 'app-create-numeric-environmental-parameter',
  imports: [
    MatModule,
    FormsModule
  ],
  templateUrl: './create-numeric-environmental-parameter.component.html',
  standalone: true,
  styleUrl: './create-numeric-environmental-parameter.component.scss'
})
export class CreateNumericEnvironmentalParameterComponent {
  @Input() parameter: NumericEnvironmentalParameter = new NumericEnvironmentalParameter();
}
