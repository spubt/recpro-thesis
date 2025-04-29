import {Component, EventEmitter, Input, Output} from '@angular/core';
import {MatModule} from '../../../../util/mat/mat.module';
import {NgForOf} from '@angular/common';
import {
  RecproTasklist, RecproTasklistEntry
} from '@recprocess/recpro-frontend-lib';
import {SortTasklistPipe} from './SortTasklistPipe';
import {TasklistEntryComponent} from './tasklist-entry/tasklist-entry.component';

@Component({
  selector: 'app-tasklist',
  imports: [
    MatModule,
    NgForOf,
    SortTasklistPipe,
    TasklistEntryComponent
  ],
  standalone: true,
  templateUrl: './tasklist.component.html',
  styleUrl: './tasklist.component.scss'
})
export class TasklistComponent {

  @Input() set tasklistInput(value: RecproTasklist) {
    this.tasklist = value;
  }

  @Output() tasklistEntrySelection = new EventEmitter<RecproTasklistEntry>();

  tasklist: RecproTasklist = new RecproTasklist();

  selectTask(entry: RecproTasklistEntry) {
    this.tasklistEntrySelection.emit(entry);
  }
}
