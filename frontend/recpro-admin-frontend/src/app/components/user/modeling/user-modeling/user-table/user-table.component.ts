 import {AfterViewInit, Component, EventEmitter, Input, Output, ViewChild} from '@angular/core';
 import {MatModule} from '../../../../../util/mat/mat.module';
 import {DialogService, User} from '@recprocess/recpro-frontend-lib';
 import {MatPaginator} from '@angular/material/paginator';
 import {MatSort} from '@angular/material/sort';
 import {MatTableDataSource} from '@angular/material/table';
 import {CreateUserDialogComponent} from '../create-user-dialog/create-user-dialog.component';

@Component({
  selector: 'app-user-table',
  imports: [
    MatModule
  ],
  templateUrl: './user-table.component.html',
  standalone: true,
  styleUrl: './user-table.component.scss'
})
export class UserTableComponent implements AfterViewInit {

  @Input() set userInput(users: User[]) {
    this.dataSource.data = users;
  }

  @Output() userUpdated = new EventEmitter();

  displayedColumns: string[] = ['id', 'email', 'name', 'status', 'edit'];
  dataSource: MatTableDataSource<User> = new MatTableDataSource<User>();

  @ViewChild(MatPaginator, { static: false }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: false }) sort: MatSort;

  @Input('editable') editable: boolean = true;

  constructor(
    private dialogService: DialogService,
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

  edit(row: User) {
    this.openDialog(row);
  }

  openDialog(user: User) {
    const dialogRef = this.dialogService.open(CreateUserDialogComponent, {user: user, password: ''});

    dialogRef.afterClosed().subscribe(() => {
      this.userUpdated.emit();
    });
  }
}
