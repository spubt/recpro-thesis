import {Component, Input} from '@angular/core';
import {TextualActivityParameter} from '@recprocess/recpro-frontend-lib';
import {MatModule} from '../../../../../../util/mat/mat.module';
import {FormsModule} from '@angular/forms';

@Component({
  selector: 'app-create-textual-activity-parameter',
  imports: [
    MatModule,
    FormsModule
  ],
  templateUrl: './create-textual-activity-parameter.component.html',
  standalone: true,
  styleUrl: './create-textual-activity-parameter.component.scss'
})
export class CreateTextualActivityParameterComponent {

  @Input() parameter: TextualActivityParameter = new TextualActivityParameter();

}
