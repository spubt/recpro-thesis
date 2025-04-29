import { Component } from '@angular/core';
import {MetaAttributesTableComponent} from './meta-attributes-table/meta-attributes-table.component';
import {MatModule} from '../../../../util/mat/mat.module';
import {
  CreateMetaAttributeDialogComponent
} from './create-meta-attribute-dialog/create-meta-attribute-dialog.component';

import {DialogService, MetaAttribute, MetaAttributeModelingService} from '@recprocess/recpro-frontend-lib';

@Component({
  selector: 'app-meta-attributes',
  imports: [
    MatModule,
    MetaAttributesTableComponent
  ],
  standalone: true,
  templateUrl: './meta-attributes.component.html',
  styleUrl: './meta-attributes.component.scss'
})
export class MetaAttributesComponent {

  metaAttributes: MetaAttribute[] = [];

  constructor(
    private dialogService: DialogService,
    private metaAttributeService: MetaAttributeModelingService
  ) {
    this._getMetaAttributes();
  }

  createMetaAttribute() {
    const dialog = this.dialogService.open(CreateMetaAttributeDialogComponent, new MetaAttribute());

    dialog.afterClosed().subscribe(() => {
      this._getMetaAttributes();
    });
  }

  private _getMetaAttributes() {
    this.metaAttributeService.getAll().subscribe(res => {
      this.metaAttributes = res;
    });
  }
}
