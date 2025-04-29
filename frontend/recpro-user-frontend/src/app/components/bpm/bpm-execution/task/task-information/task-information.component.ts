import {Component, Input} from '@angular/core';
import {RecproTasklistEntry} from '@recprocess/recpro-frontend-lib';
import {JsonPipe} from '@angular/common';

@Component({
  selector: 'app-task-information',
  imports: [
    JsonPipe
  ],
  templateUrl: './task-information.component.html',
  standalone: true,
  styleUrl: './task-information.component.scss'
})
export class TaskInformationComponent {

  @Input() tasklistEntry: RecproTasklistEntry = new RecproTasklistEntry();

  constructor(
  ) {
  }
}
