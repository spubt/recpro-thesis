import {Component, Input} from '@angular/core';
import {TextualActivityParameter, TextualActivityParameterInstance} from '@recprocess/recpro-frontend-lib';
import {FormsModule} from '@angular/forms';
import {MatModule} from '../../../../../util/mat/mat.module';

@Component({
  selector: 'app-textual-activity-parameter',
  imports: [
    MatModule,
    FormsModule,
  ],
  templateUrl: './textual-activity-parameter.component.html',
  standalone: true,
  styleUrl: './textual-activity-parameter.component.scss'
})
export class TextualActivityParameterComponent {

  @Input() activityParameter: TextualActivityParameter = new TextualActivityParameter();
  @Input() activityParameterInstance: TextualActivityParameterInstance = new TextualActivityParameterInstance();
  @Input() executable: boolean = false;

}
