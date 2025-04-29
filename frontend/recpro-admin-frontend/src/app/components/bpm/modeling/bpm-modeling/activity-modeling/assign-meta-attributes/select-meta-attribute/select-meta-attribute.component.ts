import {Component, EventEmitter, Input, Output} from '@angular/core';
import {MatModule} from '../../../../../../../util/mat/mat.module';
import {MetaAttribute} from '@recprocess/recpro-frontend-lib';
import {NgForOf} from '@angular/common';
import {FormsModule} from '@angular/forms';

@Component({
  selector: 'app-select-meta-attribute',
  imports: [
    MatModule,
    NgForOf,
    FormsModule
  ],
  templateUrl: './select-meta-attribute.component.html',
  standalone: true,
  styleUrl: './select-meta-attribute.component.scss'
})
export class SelectMetaAttributeComponent {

  @Input() metaAttributes: MetaAttribute[] = [];

  @Output() selectedAttributeChange = new EventEmitter<MetaAttribute>();

  selectedAttribute: MetaAttribute = new MetaAttribute();

  addSelectedAttribute() {
    console.log(this.selectedAttribute);
    if (this.selectedAttribute) {
      this.selectedAttributeChange.emit(this.selectedAttribute);
    }
  }
}
