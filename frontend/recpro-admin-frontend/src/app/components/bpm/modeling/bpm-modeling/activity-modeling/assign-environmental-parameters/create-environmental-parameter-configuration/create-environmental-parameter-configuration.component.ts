import {Component, EventEmitter, Input, Output} from '@angular/core';
import {MatModule} from '../../../../../../../util/mat/mat.module';
import {
  AbstractEnvironmentalParameter,
  Activity,
  EnvironmentalParameterConfiguration
} from '@recprocess/recpro-frontend-lib';
import {FormsModule} from '@angular/forms';
import {NgForOf, NgIf} from '@angular/common';

@Component({
  selector: 'app-create-environmental-parameter-configuration',
  imports: [
    MatModule,
    FormsModule,
    NgForOf,
    NgIf
  ],
  templateUrl: './create-environmental-parameter-configuration.component.html',
  standalone: true,
  styleUrl: './create-environmental-parameter-configuration.component.scss'
})
export class CreateEnvironmentalParameterConfigurationComponent {

  @Input() parameters: AbstractEnvironmentalParameter[] = [];
  @Input() activity: Activity = new Activity();

  @Output() selectedParameterChange = new EventEmitter<EnvironmentalParameterConfiguration>();

  selectedParameter: AbstractEnvironmentalParameter = new AbstractEnvironmentalParameter();
  configuration: EnvironmentalParameterConfiguration = new EnvironmentalParameterConfiguration();

  addConfiguration() {
    if (this.selectedParameter) {
      this.configuration.parameter = this.selectedParameter;
      this.configuration.activity = this.activity;
      this.selectedParameterChange.emit(this.configuration);
      this.selectedParameter = new AbstractEnvironmentalParameter();
      this.configuration = new EnvironmentalParameterConfiguration();
    }
  }

  changedParameter() {
    this.configuration.source = this.selectedParameter.source;
  }
}
