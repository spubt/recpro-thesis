import {AfterViewInit, Component, Input, ViewChild} from '@angular/core';
import {
  RecommendationDimension,
  RecommendationDimensionModelingService
} from '@recprocess/recpro-frontend-lib';
import {
  MatTableDataSource
} from '@angular/material/table';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatDialog} from '@angular/material/dialog';
import {MatModule} from '../../../../../../util/mat/mat.module';
import {CreateDimensionDialogComponent} from '../create-dimension-dialog/create-dimension-dialog.component';

@Component({
  selector: 'app-dimension-modeling-table',
  imports: [
    MatModule
  ],
  templateUrl: './dimension-modeling-table.component.html',
  standalone: true,
  styleUrl: './dimension-modeling-table.component.scss'
})
export class DimensionModelingTableComponent implements AfterViewInit{

  @Input() set dimensionsInput(dimensions: RecommendationDimension[]) {
    this.dataSource.data = dimensions;
  }

  displayedColumns: string[] = ['id', 'label', 'type', 'edit'];
  dataSource: MatTableDataSource<RecommendationDimension> = new MatTableDataSource<RecommendationDimension>();

  @ViewChild(MatPaginator, { static: false }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: false }) sort: MatSort;

  @Input('editable') editable: boolean = true;

  constructor(
    public dialog: MatDialog,
    private modelingService: RecommendationDimensionModelingService
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

  editDimension(row: RecommendationDimension) {
    this.openDialog(row);
  }

  openDialog(dimension: RecommendationDimension) {
    const dialogRef = this.dialog.open(CreateDimensionDialogComponent, {
      data: dimension
    });

    dialogRef.afterClosed().subscribe(() => {
      this.modelingService.getAll().subscribe(res => this.dataSource.data = res);
    })
  }

}
