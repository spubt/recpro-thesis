import {AfterViewInit, Component, EventEmitter, Input, Output, ViewChild} from '@angular/core';

import {
  MatTableDataSource, MatTableModule
} from '@angular/material/table';
import {MatPaginator, MatPaginatorModule} from '@angular/material/paginator';
import {MatSort, MatSortModule} from '@angular/material/sort';

import {
  MatCardContent,
  MatCardModule
} from '@angular/material/card';
import {MatFormField} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatMenuItem} from '@angular/material/menu';
import {Process} from '../../model/Process';
import {MatIconModule} from '@angular/material/icon';

@Component({
  selector: 'app-process-table',
  imports: [
    MatCardModule,
    MatFormField,
    MatCardContent,
    MatTableModule,
    MatInputModule,
    MatIconModule,
    MatMenuItem,
    MatSortModule,
    MatPaginatorModule

  ],
  standalone: true,
  templateUrl: './process-table.component.html',
  styleUrl: './process-table.component.scss'
})
export class ProcessTableComponent implements AfterViewInit {
  displayedColumns: string[] = ['id', 'name', 'description', 'version', 'edit', 'view', 'start'];
  dataSource: MatTableDataSource<Process> = new MatTableDataSource<Process>();

  @ViewChild(MatPaginator, { static: false }) paginator!: MatPaginator;
  @ViewChild(MatSort, { static: false }) sort!: MatSort;

  @Input('editable') editable: boolean = false;
  @Input('startable') startable: boolean = false;
  @Input('viewable') viewable: boolean = true;
  @Input('processes') set processes(processes: Process[]) {
    this.dataSource.data = processes;
  }

  @Output('start') start = new EventEmitter<Process>();
  @Output('edit') edit = new EventEmitter<Process>();
  @Output('view') view = new EventEmitter<Process>();

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;


    if (!this.editable) {
      this.hideColumn('edit');
    }

    if (!this.startable) {
      this.hideColumn('start');
    }

    if (!this.viewable) {
      this.hideColumn('view');
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

  editProcess(row: Process) {
    this.edit.emit(row);
  }

  viewProcess(row: Process) {
    this.view.emit(row);
  }

  startProcess(process: Process) {
    this.start.emit(process);
  }
}
