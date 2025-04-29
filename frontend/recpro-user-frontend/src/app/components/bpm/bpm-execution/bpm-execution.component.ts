import {Component} from '@angular/core';
import {MatModule} from '../../../util/mat/mat.module';
import {
  BpmTasklistExecutionService,
  DialogService,
  RecommendationServiceModel,
  RecommendationServiceModelType,
  RecproTasklist,
  RecproTasklistEntry,
} from '@recprocess/recpro-frontend-lib';
import {StartProcessDialogComponent} from './start-process-dialog/start-process-dialog.component';
import {TaskComponent} from './task/task.component';
import {TasklistComponent} from './tasklist/tasklist.component';
import {NgIf} from '@angular/common';
import {
  RecommendationServiceExecutionComponent
} from '../../recommendation/recommendation-service-execution/recommendation-service-execution.component';
import {
  RecommendationServiceExecutionService
} from '../../recommendation/recommendation-service-execution/service/recommendation-service-execution.service';
import {
  KnowledgeBasedRecommendationServiceDialogComponent
} from '../../recommendation/recommendation-service-execution/knowledge-based-recommendation-service-dialog/knowledge-based-recommendation-service-dialog.component';
import {MatDialogConfig} from '@angular/material/dialog';

@Component({
  selector: 'app-bpm-execution',
  imports: [
    MatModule,
    TaskComponent,
    TasklistComponent,
    NgIf,
    RecommendationServiceExecutionComponent
  ],
  standalone: true,
  templateUrl: './bpm-execution.component.html',
  styleUrl: './bpm-execution.component.scss'
})
export class BpmExecutionComponent {

  tasklist: RecproTasklist = new RecproTasklist();
  currentTasklistEntry: RecproTasklistEntry = new RecproTasklistEntry();

  constructor(
    private dialogService: DialogService,
    private tasklistService: BpmTasklistExecutionService,
    private recommendationService: RecommendationServiceExecutionService
  ) {
    this.reloadTasklist();
  }

  reloadTasklist() {
    this.tasklistService.get().subscribe(tasklist => {
      this.tasklist = tasklist;
      console.log(tasklist);
      this.currentTasklistEntry = new RecproTasklistEntry();
    });
  }

  updateTask(entry: RecproTasklistEntry) {
    this.currentTasklistEntry = entry;
  }

  updateTaskAndReloadTasklist(entry: RecproTasklistEntry) {
    this.tasklistService.get().subscribe(tasklist => {
      this.tasklist = tasklist;
      this.currentTasklistEntry = tasklist.entries.find(ent => ent.recproTaskInstance.bpmsTaskInstanceId === entry.recproTaskInstance.bpmsTaskInstanceId)!;
    })
  }

  deselectCurrentFilter() {
    this.tasklist.recommendationServiceModel = undefined;
  }

  getRecommendationServiceId(): number {
    return Number(this.tasklist.recommendationServiceModel?.id);
  }

  deselectCurrentTask() {
    this.currentTasklistEntry = new RecproTasklistEntry();
  }

  startProcess() {
    const dialogRef = this.dialogService.open(StartProcessDialogComponent);
    dialogRef.afterClosed().subscribe(() => {
      this.tasklistService.get().subscribe(tasklist => {
        this.tasklist = tasklist;
      })
    });
  }

  recommendationServiceSelectionChanged(recommendationService: RecommendationServiceModel) {
    this.tasklist.recommendationServiceModel = recommendationService;

    this.recommendationService.initialize(recommendationService).subscribe(res => {
      console.log(res);
      if (recommendationService.recommendationType === RecommendationServiceModelType.KNOWLEDGE_BASED) {
        const dialogConfig: MatDialogConfig = {
          width: '850px',
          height: '600px'
        };

        const dialogRef = this.dialogService.open(KnowledgeBasedRecommendationServiceDialogComponent, res.recommendationServiceInstance, dialogConfig);

        dialogRef.afterClosed().subscribe(() => {
          console.log("Closed dialog");
          // TODO: override tasklist
        });
      } else {
        this.recommendationService.applyRecommendation(res).subscribe(tasklist => {
          this.tasklist = tasklist;
          console.log(tasklist);
        });
      }
    });
  }
}
