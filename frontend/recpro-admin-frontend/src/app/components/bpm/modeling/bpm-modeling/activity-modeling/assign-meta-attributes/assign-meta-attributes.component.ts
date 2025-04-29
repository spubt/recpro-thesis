import {Component, Inject} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {
  Activity,
  MetaAttribute, MetaAttributeConfiguration, MetaAttributeConfigurationService,
  MetaAttributeModelingService
} from '@recprocess/recpro-frontend-lib';
import {MatModule} from '../../../../../../util/mat/mat.module';
import {
  MetaAttributeConfigurationTableComponent

} from './activity-meta-attribute-table/meta-attribute-configuration-table.component';
import {SelectMetaAttributeComponent} from './select-meta-attribute/select-meta-attribute.component';

@Component({
  selector: 'app-assign-meta-attributes',
  imports: [
    MatModule,
    MetaAttributeConfigurationTableComponent,
    SelectMetaAttributeComponent
  ],
  templateUrl: './assign-meta-attributes.component.html',
  standalone: true,
  styleUrl: './assign-meta-attributes.component.scss'
})
export class AssignMetaAttributesComponent {


  metaAttributes: MetaAttribute[] = [];
  metaAttributeConfigurations: MetaAttributeConfiguration[] = [];
  selectedMetaAttributes: MetaAttribute[] = [];
  availableMetaAttributes: MetaAttribute[] = [];

  constructor(
    @Inject(MAT_DIALOG_DATA) public activity: Activity,
    private service: MetaAttributeConfigurationService,
    private metaAttributeService: MetaAttributeModelingService,
    private dialogRef: MatDialogRef<AssignMetaAttributesComponent>,
  ) {
    this.getData();
  }

  getData() {
    this.service.getByActivityId(this.activity.id!).subscribe(res => {
      this.metaAttributeConfigurations = res;
      this.metaAttributeService.getAll().subscribe(mas => {
        this.metaAttributes = mas;
        this.filterMetaAttributes();
      });
    });
  }

  selectAttribute(metaAttribute: MetaAttribute) {
    if (metaAttribute) {
      const metaAttributeConfiguration = new MetaAttributeConfiguration();
      metaAttributeConfiguration.metaAttribute.id = metaAttribute.id!;
      metaAttributeConfiguration.activity.id = this.activity.id!;
      this.metaAttributeConfigurations.push(metaAttributeConfiguration);
      this.filterMetaAttributes();
    }
  }

  removeAttribute(metaAttribute: MetaAttribute) {
    if (metaAttribute) {
      this.metaAttributeConfigurations = this.metaAttributeConfigurations.filter(entry =>
        !(entry.activity.id === this.activity.id && entry.metaAttribute.id === metaAttribute.id)
      );

      this.filterMetaAttributes();
    }
  }

  filterMetaAttributes() {
    this.selectedMetaAttributes = this.metaAttributes.filter(meta => this.metaAttributeConfigurations.some(activity => activity.metaAttribute.id === meta.id));
    this.availableMetaAttributes = this.metaAttributes.filter(meta =>
      !this.selectedMetaAttributes.some(selected => selected.id === meta.id)
    );

  }

  submit() {
    console.log(this.metaAttributeConfigurations);
    console.log(this.activity.id);
    this.service.createAll(this.metaAttributeConfigurations, this.activity.id!, '').subscribe( () => {
      this.dialogRef.close();
    });
    // this.dialogRef.close();
  }
}
