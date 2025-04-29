import {Component, Input} from '@angular/core';
import {RecproProcessInstance} from '@recprocess/recpro-frontend-lib';
import {MatModule} from '../../../../../util/mat/mat.module';
import {FormsModule} from '@angular/forms';

@Component({
  selector: 'app-task-process-information',
  imports: [
    MatModule,
    FormsModule
  ],
  standalone: true,
  templateUrl: './task-process-information.component.html',
  styleUrl: './task-process-information.component.scss'
})
export class TaskProcessInformationComponent {

  @Input() processInstance: RecproProcessInstance = new RecproProcessInstance();

}
