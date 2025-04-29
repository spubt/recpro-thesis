import {AfterViewInit, Component, Input, ViewChild} from '@angular/core';
import {MatModule} from '../../../../../../util/mat/mat.module';
import {
  DialogService,
  RecommendationServiceModel,
  RecommendationServiceModelingService
} from '@recprocess/recpro-frontend-lib';
import {MatTableDataSource} from '@angular/material/table';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {
  CreateRecommendationServiceDialogComponent
} from '../create-recommendation-service-dialog/create-recommendation-service-dialog.component';

@Component({
  selector: 'app-recommendation-service-modeling-table',
  imports: [
    MatModule
  ],
  templateUrl: './recommendation-service-modeling-table.component.html',
  standalone: true,
  styleUrl: './recommendation-service-modeling-table.component.scss'
})
export class RecommendationServiceModelingTableComponent implements AfterViewInit{

  @Input() set recommendationServicesInput(recommendationServices: RecommendationServiceModel[]) {
    this.dataSource.data = recommendationServices;
  }

  displayedColumns: string[] = ['id', 'name', 'description', 'url', 'type', 'edit'];

  dataSource: MatTableDataSource<RecommendationServiceModel> = new MatTableDataSource<RecommendationServiceModel>();

  @ViewChild(MatPaginator, { static: false }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: false }) sort: MatSort;

  @Input('editable') editable: boolean = true;

  constructor(
    public dialog: DialogService,
    private modelingService: RecommendationServiceModelingService,
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


  editRecommendationService(row: RecommendationServiceModel) {
    this.openDialog(row);
  }

  openDialog(recommendationService: RecommendationServiceModel) {
    const dialogRef = this.dialog.open(CreateRecommendationServiceDialogComponent, recommendationService);

    dialogRef.afterClosed().subscribe(() => {
      this.modelingService.getAll().subscribe(res => this.dataSource.data = res);
    })
  }

}
