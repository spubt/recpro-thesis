import {AfterViewInit, Component, EventEmitter, Input, Output, ViewChild} from '@angular/core';
import {MatModule} from '../../../../../../../util/mat/mat.module';
import {MatTableDataSource} from '@angular/material/table';
import {EnvironmentalParameterConfiguration} from '@recprocess/recpro-frontend-lib';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';

@Component({
  selector: 'app-environmental-parameter-configuration-table',
  imports: [
    MatModule
  ],
  templateUrl: './environmental-parameter-configuration-table.component.html',
  standalone: true,
  styleUrl: './environmental-parameter-configuration-table.component.scss'
})
export class EnvironmentalParameterConfigurationTableComponent implements AfterViewInit{
  displayedColumns: string[] = ['label', 'type', 'source', 'delete'];
  dataSource: MatTableDataSource<EnvironmentalParameterConfiguration> = new MatTableDataSource<EnvironmentalParameterConfiguration>();

  @ViewChild(MatPaginator, { static: false }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: false }) sort: MatSort;

  @Input() set parameterConfigurationInput(configurations: EnvironmentalParameterConfiguration[]) {
    this.dataSource.data = configurations;
  }

  @Output() removeConfiguration = new EventEmitter<EnvironmentalParameterConfiguration>();


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

  deleteConfiguration(configuration: EnvironmentalParameterConfiguration) {
    this.removeConfiguration.emit(configuration);
  }

}
