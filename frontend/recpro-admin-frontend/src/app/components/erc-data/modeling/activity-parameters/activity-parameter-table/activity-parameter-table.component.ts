import {AfterViewInit, Component, Input, ViewChild} from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';
import {MatModule} from '../../../../../util/mat/mat.module';
import {
  AbstractActivityParameter,
  ActivityParameterModelingService,
} from '@recprocess/recpro-frontend-lib';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatDialog} from '@angular/material/dialog';
import {CreateActivityParameterDialogComponent} from '../create-activity-parameter-dialog/create-activity-parameter-dialog.component';

@Component({
  selector: 'app-activity-parameter-table',
  imports: [
    MatModule
  ],
  standalone: true,
  templateUrl: './activity-parameter-table.component.html',
  styleUrl: './activity-parameter-table.component.scss'
})
export class ActivityParameterTableComponent implements AfterViewInit {

  @Input() set activityParametersInput(activityParameters: AbstractActivityParameter[]) {
    this.dataSource.data = activityParameters;
  }

  displayedColumns: string[] = ['id', 'label', 'description', 'type', 'edit'];
  dataSource: MatTableDataSource<AbstractActivityParameter> = new MatTableDataSource<AbstractActivityParameter>();

  @ViewChild(MatPaginator, { static: false }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: false }) sort: MatSort;

  @Input('editable') editable: boolean = true;

  constructor(
    private modelingService: ActivityParameterModelingService,
    public dialog: MatDialog,
  ) {
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;


    if (!this.editable) {
      this.hideColumn('edit');
    }
  }

  hideColumn(column: string) {
    const index = this.displayedColumns.indexOf(column);
    if (index >= 0) {
      this.displayedColumns.splice(index, 1);
    } else {
      this.displayedColumns.push(column);
    }
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  editActivityParameter(row: AbstractActivityParameter) {
    this.openDialog(row);
  }

  openDialog(activityParameter: AbstractActivityParameter) {
    const dialogRef = this.dialog.open(CreateActivityParameterDialogComponent, {
      data: activityParameter
    });

    dialogRef.afterClosed().subscribe(() => {
      this.modelingService.getAll().subscribe(res => this.dataSource.data = res);
    })
  }
}
