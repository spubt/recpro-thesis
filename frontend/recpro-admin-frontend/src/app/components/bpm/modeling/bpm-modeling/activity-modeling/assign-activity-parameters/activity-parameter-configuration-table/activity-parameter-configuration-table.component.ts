import {AfterViewInit, Component, EventEmitter, Input, Output, ViewChild} from '@angular/core';
import {MatModule} from '../../../../../../../util/mat/mat.module';
import {MatTableDataSource} from '@angular/material/table';
import {ActivityParameterConfiguration} from '@recprocess/recpro-frontend-lib';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';

@Component({
  selector: 'app-activity-parameter-configuration-table',
  imports: [
    MatModule
  ],
  standalone: true,
  templateUrl: './activity-parameter-configuration-table.component.html',
  styleUrl: './activity-parameter-configuration-table.component.scss'
})
export class ActivityParameterConfigurationTableComponent implements AfterViewInit {

  displayedColumns: string[] = ['label', 'type', 'position', 'width', 'delete'];
  dataSource: MatTableDataSource<ActivityParameterConfiguration> = new MatTableDataSource<ActivityParameterConfiguration>();

  @ViewChild(MatPaginator, { static: false }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: false }) sort: MatSort;

  @Input() set activityParameterConfigurationInput(parameterConfigurations: ActivityParameterConfiguration[]) {
    this.dataSource.data = parameterConfigurations;
  }

  @Output() removeActivityParameterConfiguration = new EventEmitter<ActivityParameterConfiguration>();

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  deleteActivityParameterConfiguration(parameterConfiguration: ActivityParameterConfiguration) {
    this.removeActivityParameterConfiguration.emit(parameterConfiguration);
  }
}
