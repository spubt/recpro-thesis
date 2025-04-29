import {Component, EventEmitter, Input, Output} from '@angular/core';
import {MatModule} from '../../../../../util/mat/mat.module';
import {OrdinalOption} from '@recprocess/recpro-frontend-lib';
import {MatTableDataSource} from '@angular/material/table';
import {FormsModule} from '@angular/forms';

@Component({
  selector: 'app-ordinal-option-table',
  imports: [
    MatModule,
    FormsModule
  ],
  standalone: true,
  templateUrl: './ordinal-option-table.component.html',
  styleUrl: './ordinal-option-table.component.scss'
})
export class OrdinalOptionTableComponent {

  @Input('ordinalOptions') set ordinalOptionsInput(value: OrdinalOption[]) {
    if (value) {
      this.ordinalOptions = value;
    }
    this.sortByPosition();
    this.dataSource.data = this.ordinalOptions;
  }

  @Output() ordinalOptionsChange = new EventEmitter<OrdinalOption[]>();

  ordinalOptions: OrdinalOption[] = [];

  displayedColumns: string[] = ['id', 'label', 'value', 'position', 'delete'];
  dataSource = new MatTableDataSource<OrdinalOption>(this.ordinalOptions);

  public addElement() {
    let option = new OrdinalOption();
    option.position = this.dataSource.data.length;
    this.dataSource.data.push(option);
    this.sortByPosition();
  }

  deleteElement(ordinalOption: OrdinalOption) {
    const index = this.dataSource.data.indexOf(ordinalOption);
    if (index >= 0) {
      this.dataSource.data.splice(index, 1);
      this.sortByPosition(); // Refresh the dataSource
    }
  }

  sortByPosition() {
    this.ordinalOptions.sort((a, b) => a.position - b.position);
    this.dataSource._updateChangeSubscription();
    this.ordinalOptionsChange.emit(this.ordinalOptions);
  }
}
