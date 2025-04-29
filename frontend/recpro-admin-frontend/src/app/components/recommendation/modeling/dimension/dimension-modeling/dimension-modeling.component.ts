import {Component} from '@angular/core';
import {
  DialogService,
  RecommendationDimension,
  RecommendationDimensionModelingService
} from '@recprocess/recpro-frontend-lib';
import {DimensionModelingTableComponent} from './dimension-modeling-table/dimension-modeling-table.component';
import {MatModule} from '../../../../../util/mat/mat.module';
import {CreateDimensionDialogComponent} from './create-dimension-dialog/create-dimension-dialog.component';



@Component({
  selector: 'app-dimension-modeling',
  imports: [
    MatModule,
    DimensionModelingTableComponent
  ],
  standalone: true,
  templateUrl: './dimension-modeling.component.html',
  styleUrl: './dimension-modeling.component.scss'
})
export class DimensionModelingComponent {

  dimensions: RecommendationDimension[] = [];

  constructor(
    private dimensionModelingService: RecommendationDimensionModelingService,
    private dialogService: DialogService,
  ) {
    this._getDimensions();
  }

  createDimension() {
    const dialogRef = this.dialogService.open(CreateDimensionDialogComponent, new RecommendationDimension());
    dialogRef.afterClosed().subscribe(() => {
      this._getDimensions();
    });
  }

  private _getDimensions() {
    this.dimensionModelingService.getAll().subscribe(res => {
      this.dimensions = res;
    });
  }
}


