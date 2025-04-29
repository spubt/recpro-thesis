import {Component, Inject} from '@angular/core';
import {MetaAttribute, MetaAttributeModelingService} from '@recprocess/recpro-frontend-lib';
import {
  MAT_DIALOG_DATA, MatDialogRef

} from '@angular/material/dialog';
import {FormsModule} from '@angular/forms';
import {MatModule} from '../../../../../util/mat/mat.module';

@Component({
  selector: 'app-create-meta-attribute-dialog',
  imports: [
    MatModule,
    FormsModule,
  ],
  standalone: true,
  templateUrl: './create-meta-attribute-dialog.component.html',
  styleUrl: './create-meta-attribute-dialog.component.scss'
})
export class CreateMetaAttributeDialogComponent {

  constructor(
    @Inject(MAT_DIALOG_DATA) public metaAttribute: MetaAttribute,
    private modelingService: MetaAttributeModelingService,
    private dialogRef: MatDialogRef<CreateMetaAttributeDialogComponent>,
    ) {
    if (this.metaAttribute === null || this.metaAttribute === undefined) {
      this.metaAttribute = new MetaAttribute();
    }
  }

  save() {
    this.modelingService.create(this.metaAttribute).subscribe(() => {
      this.modelingService.getAll().subscribe(() => {
        this.dialogRef.close();
      });
    });
  }
}
