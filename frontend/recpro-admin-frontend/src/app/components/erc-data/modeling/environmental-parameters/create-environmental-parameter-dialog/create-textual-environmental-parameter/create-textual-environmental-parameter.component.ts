import {Component, Input} from '@angular/core';
import {MatModule} from '../../../../../../util/mat/mat.module';
import {TextualEnvironmentalParameter} from '@recprocess/recpro-frontend-lib';
import {FormsModule} from '@angular/forms';

@Component({
  selector: 'app-create-textual-environmental-parameter',
  imports: [
    MatModule,
    FormsModule
  ],
  templateUrl: './create-textual-environmental-parameter.component.html',
  standalone: true,
  styleUrl: './create-textual-environmental-parameter.component.scss'
})
export class CreateTextualEnvironmentalParameterComponent {
  @Input() parameter: TextualEnvironmentalParameter = new TextualEnvironmentalParameter();
}
