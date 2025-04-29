import {AfterViewInit, Component, ViewChild} from '@angular/core';
import {
  MatTableDataSource
} from "@angular/material/table";
import {MatSort} from "@angular/material/sort";
import {Activity, BpmActivityModelingService, DialogService} from '@recprocess/recpro-frontend-lib';
import {MatPaginator} from '@angular/material/paginator';
import {MatModule} from '../../../../../../util/mat/mat.module';
import {AssignMetaAttributesComponent} from '../assign-meta-attributes/assign-meta-attributes.component';
import {AssignActivityParametersComponent} from '../assign-activity-parameters/assign-activity-parameters.component';
import {
  AssignEnvironmentalParametersComponent
} from '../assign-environmental-parameters/assign-environmental-parameters.component';

@Component({
  selector: 'app-activity-modeling-table',
    imports: [
        MatModule
    ],
  standalone: true,
  templateUrl: './activity-modeling-table.component.html',
  styleUrl: './activity-modeling-table.component.scss'
})
export class ActivityModelingTableComponent implements AfterViewInit {
  displayedColumns: string[] = ['id', 'name', 'description', 'metaAttributes', 'activityParameters', 'environmentalParameters'];
  dataSource: MatTableDataSource<Activity> = new MatTableDataSource<Activity>();

  @ViewChild(MatPaginator, { static: false }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: false }) sort: MatSort;

  constructor(
    private activityService: BpmActivityModelingService,
    private dialogService: DialogService,
  ) {
    this.getAllActivities();
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter(event: KeyboardEvent) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  editMetaAttributes(activity: Activity) {
    this.dialogService.open(AssignMetaAttributesComponent, activity);
  }

  editActivityParameters(activity: Activity) {
    this.dialogService.open(AssignActivityParametersComponent, activity);
  }

  editEnvironmentalParameters(activity: Activity) {
    this.dialogService.open(AssignEnvironmentalParametersComponent, activity);
  }

  getAllActivities() {
    this.activityService.getAll().subscribe(activities => this.dataSource.data = activities);
  }
}
