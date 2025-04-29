import {AfterViewInit, Component, Input, ViewChild} from '@angular/core';
import {MatModule} from '../../../../../util/mat/mat.module';
import {MatTableDataSource} from '@angular/material/table';
import {DialogService, Feedback, FeedbackModelingService} from '@recprocess/recpro-frontend-lib';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';

import {CreateFeedbackDialogComponent} from '../../create-feedback-dialog/create-feedback-dialog.component';

@Component({
  selector: 'app-feedback-table',
  imports: [
    MatModule
  ],
  standalone: true,
  templateUrl: './feedback-table.component.html',
  styleUrl: './feedback-table.component.scss'
})
export class FeedbackTableComponent implements AfterViewInit {
  displayedColumns: string[] = ['id', 'label', 'description', 'type', 'edit'];
  dataSource: MatTableDataSource<Feedback> = new MatTableDataSource<Feedback>();

  @ViewChild(MatPaginator, { static: false }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: false }) sort: MatSort;

  @Input('editable') editable: boolean = true;

  constructor(
    private dialogService: DialogService,
    private feedbackModelingService: FeedbackModelingService,
    ) {
    this.getAllFeedbacks();
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;

    if (!this.editable) {
      this.hideColumn('edit');
    }
  }

  private getAllFeedbacks() {
    this.feedbackModelingService.getAll().subscribe((res: Feedback[]) => {
      this.dataSource.data = res;
    });
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

  editFeedback(row: Feedback) {
    this.openDialog(row);
  }

  openDialog(feedback: Feedback) {
    const dialogRef = this.dialogService.open(CreateFeedbackDialogComponent, feedback);

    dialogRef.afterClosed().subscribe(() => {
      // reload!!
    });
  }
}
