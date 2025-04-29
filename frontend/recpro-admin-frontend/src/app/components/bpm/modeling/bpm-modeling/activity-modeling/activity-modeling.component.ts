import {MatModule} from '../../../../../util/mat/mat.module';
import {ActivityModelingTableComponent} from './activity-modeling-table/activity-modeling-table.component';
import {Component} from '@angular/core';

@Component({
  selector: 'app-activity-modeling',

  imports: [MatModule, ActivityModelingTableComponent],
  templateUrl: './activity-modeling.component.html',
  standalone: true,
  styleUrl: './activity-modeling.component.scss'
})

export class ActivityModelingComponent {


}
