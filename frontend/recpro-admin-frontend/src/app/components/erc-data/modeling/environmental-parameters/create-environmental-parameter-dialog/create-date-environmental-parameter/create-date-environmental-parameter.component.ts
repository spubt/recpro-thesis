import {Component, Input} from '@angular/core';
import {MatModule} from '../../../../../../util/mat/mat.module';
import {DateEnvironmentalParameter} from '@recprocess/recpro-frontend-lib';
import {FormsModule} from '@angular/forms';
import {NgIf} from '@angular/common';

@Component({
  selector: 'app-create-date-environmental-parameter',
  imports: [
    MatModule,
    FormsModule,
    NgIf
  ],
  templateUrl: './create-date-environmental-parameter.component.html',
  standalone: true,
  styleUrl: './create-date-environmental-parameter.component.scss'
})
export class CreateDateEnvironmentalParameterComponent {
  @Input() parameter: DateEnvironmentalParameter = new DateEnvironmentalParameter();

}
