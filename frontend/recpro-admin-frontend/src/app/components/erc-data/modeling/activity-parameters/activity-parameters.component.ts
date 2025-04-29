import { Component } from '@angular/core';
import {
  AbstractActivityParameter, ActivityParameterModelingService,
  DialogService
} from '@recprocess/recpro-frontend-lib';
import {MatModule} from '../../../../util/mat/mat.module';
import {ActivityParameterTableComponent} from './activity-parameter-table/activity-parameter-table.component';
import {CreateActivityParameterDialogComponent} from './create-activity-parameter-dialog/create-activity-parameter-dialog.component';

@Component({
  selector: 'app-activity-parameters',
  imports: [
    MatModule,
    ActivityParameterTableComponent,
  ],
  templateUrl: './activity-parameters.component.html',
  standalone: true,
  styleUrl: './activity-parameters.component.scss'
})
export class ActivityParametersComponent {

  activityParameters: AbstractActivityParameter[] = [];

  constructor(
    private dialogService: DialogService,
    private activityParameterService: ActivityParameterModelingService
  ) {
    this._getActivityParameters();
  }

  createActivityParameter() {
    const dialogRef = this.dialogService.open(CreateActivityParameterDialogComponent, new AbstractActivityParameter())
    dialogRef.afterClosed().subscribe(() => {
      this._getActivityParameters();
    });
  }

  private _getActivityParameters() {
    this.activityParameterService.getAll().subscribe(res => {
      this.activityParameters = res;
    });
  }

}
