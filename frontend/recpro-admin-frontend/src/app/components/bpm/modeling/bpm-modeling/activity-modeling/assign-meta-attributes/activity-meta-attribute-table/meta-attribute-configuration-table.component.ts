import {AfterViewInit, Component, EventEmitter, Input, Output, ViewChild} from '@angular/core';
import {
  MatTableDataSource
} from '@angular/material/table';
import {MetaAttribute} from '@recprocess/recpro-frontend-lib';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatModule} from '../../../../../../../util/mat/mat.module';

@Component({
  selector: 'app-activity-meta-attribute-table',
  imports: [
    MatModule
  ],
  templateUrl: './meta-attribute-configuration-table.component.html',
  standalone: true,
  styleUrl: './meta-attribute-configuration-table.component.scss'
})
export class MetaAttributeConfigurationTableComponent implements AfterViewInit {

  displayedColumns: string[] = ['label', 'description', 'delete'];
  dataSource: MatTableDataSource<MetaAttribute> = new MatTableDataSource<MetaAttribute>();

  @ViewChild(MatPaginator, { static: false }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: false }) sort: MatSort;

  @Input() set metaAttributes(metaAttributes: MetaAttribute[]) {
    this.dataSource.data = metaAttributes;
  };

  @Output() removeMetaAttribute = new EventEmitter<MetaAttribute>();

  constructor(

  ) {}

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

  deleteMetaAttribute(metaAttribute: MetaAttribute) {
    this.removeMetaAttribute.emit(metaAttribute);
    // this.dataSource.data = this.dataSource.data.filter(meta => meta !== metaAttribute);
  }
}
