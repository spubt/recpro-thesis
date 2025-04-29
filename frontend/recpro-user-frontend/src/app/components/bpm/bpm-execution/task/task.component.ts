import {Component, EventEmitter, Input, Output} from '@angular/core';
import {
  ActivityParameterConfiguration,
  ActivityParameterConfigurationService,
  BpmTaskExecutionService,
  DialogService,
  RecproTasklist,
  RecproTasklistEntry, User
} from '@recprocess/recpro-frontend-lib';
import {
  RecproFeedbackExecutionComponent
} from '../../../feedback/feedback-execution/feedback-execution.component';
import {MatModule} from '../../../../util/mat/mat.module';
import {TaskInformationComponent} from './task-information/task-information.component';
import {TaskExecutionComponent} from './task-execution/task-execution.component';
import {NgIf} from '@angular/common';
import {AuthService} from '../../../../auth/auth.service';
import {TaskProcessInformationComponent} from './task-process-information/task-process-information.component';

@Component({
  selector: 'app-task',
  imports: [
    MatModule,
    TaskInformationComponent,
    TaskExecutionComponent,
    NgIf,
    TaskProcessInformationComponent,
  ],
  standalone: true,
  templateUrl: './task.component.html',
  styleUrl: './task.component.scss'
})
export class TaskComponent {

  tasklistEntry: RecproTasklistEntry = new RecproTasklistEntry();
  @Input() set tasklistEntryInput(entry: RecproTasklistEntry) {
    this.tasklistEntry = entry;
    this.getActivityParameters();
  }
  @Input() tasklist: RecproTasklist = new RecproTasklist();

  @Output() claimTask = new EventEmitter<RecproTasklistEntry>();
  @Output() completeTask = new EventEmitter();

  activityParameterConfigurations: ActivityParameterConfiguration[] = [];

  private currentUser: User = new User();

  constructor(
    private taskService: BpmTaskExecutionService,
    private dialogService: DialogService,
    private authService: AuthService,
    private activityParameterConfigurationService: ActivityParameterConfigurationService,
  ) {
    this.authService.getCurrentUserObservable().subscribe(currentUser => {
      this.currentUser = currentUser;
    });
  }

  getActivityParameters() {
    console.log(this.tasklistEntry);
    this.activityParameterConfigurationService.getByActivityId(this.tasklistEntry.recproTaskInstance.activity.id!).subscribe(res => {
      this.activityParameterConfigurations = res;
    });
  }

  claim() {
    this.taskService.claim(this.tasklist, this.tasklistEntry.id!).subscribe(() => {
      this.claimTask.emit(this.tasklistEntry);
    })
  }

  complete() {
    this.taskService.complete(this.tasklist, this.tasklistEntry.id!).subscribe((res: RecproTasklistEntry) => {
      // this.activityParameterExecutionService.createAll(this.activityParameterInstances, res.recproTaskInstance.id!).subscribe(() => {
        const dialogRef = this.dialogService.open(RecproFeedbackExecutionComponent, res);
        dialogRef.afterClosed().subscribe(() => {
          this.completeTask.emit();
        // });
      });
    });
  }

  isCurrentUserAssignee(): boolean {
    return this.tasklistEntry.recproTaskInstance.assigneeId === this.currentUser.id;
  }

  getAssignee(): string {
    if (this.isCurrentUserAssignee()) {
      return 'YOU'
    } else {
      if (this.tasklistEntry.recproTaskInstance.assigneeId === undefined || this.tasklistEntry.recproTaskInstance.assigneeId === null) {
        return 'NOT ASSIGNED';
      }
      return 'Already Assigned'
    }
  }

}
