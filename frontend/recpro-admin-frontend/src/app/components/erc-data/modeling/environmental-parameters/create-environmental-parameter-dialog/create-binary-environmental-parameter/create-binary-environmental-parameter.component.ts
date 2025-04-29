import {Component, Input} from '@angular/core';
import {MatModule} from '../../../../../../util/mat/mat.module';
import {BinaryEnvironmentalParameter} from '@recprocess/recpro-frontend-lib';
import {FormsModule} from '@angular/forms';

@Component({
  selector: 'app-create-binary-environmental-parameter',
  imports: [
    MatModule,
    FormsModule
  ],
  templateUrl: './create-binary-environmental-parameter.component.html',
  standalone: true,
  styleUrl: './create-binary-environmental-parameter.component.scss'
})
export class CreateBinaryEnvironmentalParameterComponent {
  @Input() parameter: BinaryEnvironmentalParameter = new BinaryEnvironmentalParameter();

}
