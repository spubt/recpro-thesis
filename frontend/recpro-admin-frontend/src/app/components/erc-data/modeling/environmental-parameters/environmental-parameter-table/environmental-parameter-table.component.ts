import {AfterViewInit, Component, EventEmitter, Input, Output, ViewChild} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {MatModule} from '../../../../../util/mat/mat.module';
import {
  AbstractEnvironmentalParameter,
  DialogService
} from '@recprocess/recpro-frontend-lib';
import {MatTableDataSource} from '@angular/material/table';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {
  CreateEnvironmentalParameterDialogComponent
} from '../create-environmental-parameter-dialog/create-environmental-parameter-dialog.component';

@Component({
  selector: 'app-environmental-parameter-table',
  imports: [
    FormsModule,
    MatModule
  ],
  templateUrl: './environmental-parameter-table.component.html',
  standalone: true,
  styleUrl: './environmental-parameter-table.component.scss'
})
export class EnvironmentalParameterTableComponent implements AfterViewInit {

  @Input() set parametersInput(parameters: AbstractEnvironmentalParameter[]) {
    this.dataSource.data = parameters;
  }

  displayedColumns: string[] = ['id', 'label', 'description', 'type', 'edit'];
  dataSource: MatTableDataSource<AbstractEnvironmentalParameter> = new MatTableDataSource<AbstractEnvironmentalParameter>();

  @ViewChild(MatPaginator, { static: false }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: false }) sort: MatSort;

  @Input('editable') editable: boolean = true;

  @Output('parameterChange') parameterChange = new EventEmitter();

  constructor(
    public dialogService: DialogService
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

  edit(row: AbstractEnvironmentalParameter) {
    this.openDialog(row);
  }

  openDialog(parameter: AbstractEnvironmentalParameter) {
    const dialogRef = this.dialogService.open(CreateEnvironmentalParameterDialogComponent, parameter);
    dialogRef.afterClosed().subscribe(() => this.parameterChange.emit());
  }
}
