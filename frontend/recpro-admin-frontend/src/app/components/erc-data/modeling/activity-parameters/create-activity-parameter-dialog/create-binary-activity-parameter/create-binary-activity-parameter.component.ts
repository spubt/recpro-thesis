import {Component, Input} from '@angular/core';
import {BinaryActivityParameter} from '@recprocess/recpro-frontend-lib';
import {FormsModule} from '@angular/forms';
import {MatModule} from '../../../../../../util/mat/mat.module';

@Component({
  selector: 'app-create-binary-activity-parameter',
  imports: [
    MatModule,
    FormsModule
  ],
  templateUrl: './create-binary-activity-parameter.component.html',
  standalone: true,
  styleUrl: './create-binary-activity-parameter.component.scss'
})
export class CreateBinaryActivityParameterComponent {
  @Input() parameter: BinaryActivityParameter = new BinaryActivityParameter();

}
