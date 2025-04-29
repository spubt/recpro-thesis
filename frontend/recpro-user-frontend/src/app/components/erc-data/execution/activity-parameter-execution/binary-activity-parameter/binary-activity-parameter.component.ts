import {Component, Input} from '@angular/core';
import {BinaryActivityParameter, BinaryActivityParameterInstance} from '@recprocess/recpro-frontend-lib';
import {FormsModule} from '@angular/forms';
import {MatModule} from '../../../../../util/mat/mat.module';
import {NgIf} from '@angular/common';

@Component({
  selector: 'app-binary-activity-parameter',
  imports: [
    FormsModule,
    MatModule,
    NgIf
  ],
  templateUrl: './binary-activity-parameter.component.html',
  standalone: true,
  styleUrl: './binary-activity-parameter.component.scss'
})
export class BinaryActivityParameterComponent {

  @Input() activityParameter: BinaryActivityParameter = new BinaryActivityParameter();
  @Input() activityParameterInstance: BinaryActivityParameterInstance = new BinaryActivityParameterInstance();
  @Input() executable: boolean = false;
}
