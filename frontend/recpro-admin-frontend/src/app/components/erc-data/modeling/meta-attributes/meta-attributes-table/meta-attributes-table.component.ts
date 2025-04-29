import {AfterViewInit, Component, Input, ViewChild} from '@angular/core';
import {
  MatTableDataSource
} from '@angular/material/table';
import {MetaAttribute, MetaAttributeModelingService} from '@recprocess/recpro-frontend-lib';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatDialog} from '@angular/material/dialog';
import {
  CreateMetaAttributeDialogComponent
} from '../create-meta-attribute-dialog/create-meta-attribute-dialog.component';
import {MatModule} from '../../../../../util/mat/mat.module';

@Component({
  selector: 'app-meta-attributes-table',
  imports: [
    MatModule
  ],
  standalone: true,
  templateUrl: './meta-attributes-table.component.html',
  styleUrl: './meta-attributes-table.component.scss'
})
export class MetaAttributesTableComponent implements AfterViewInit{
  @Input() set metaAttributesInput(metaAttributes: MetaAttribute[]) {
    this.dataSource.data = metaAttributes;
  }

  displayedColumns: string[] = ['id', 'label', 'description', 'activities', 'edit'];
  dataSource: MatTableDataSource<MetaAttribute> = new MatTableDataSource<MetaAttribute>();

  @ViewChild(MatPaginator, { static: false }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: false }) sort: MatSort;

  @Input('editable') editable: boolean = true;

  constructor(
    private modelingService: MetaAttributeModelingService,
    public dialog: MatDialog
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

  editMetaAttribute(row: MetaAttribute) {
    this.openDialog(row);
  }

  openDialog(metaAttribute: MetaAttribute) {
    const dialogRef = this.dialog.open(CreateMetaAttributeDialogComponent, {
      data: metaAttribute
    });

    dialogRef.afterClosed().subscribe(() => {
      this.modelingService.getAll().subscribe(res => {
        this.dataSource.data = res;
      });
    });
  }
}
