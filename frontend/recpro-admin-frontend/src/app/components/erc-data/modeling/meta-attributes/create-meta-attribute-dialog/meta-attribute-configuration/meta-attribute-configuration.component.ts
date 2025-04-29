import {Component, Input, OnInit} from '@angular/core';
import {
  Activity,
  BpmActivityModelingService,
  MetaAttribute, MetaAttributeConfiguration, MetaAttributeConfigurationService
} from '@recprocess/recpro-frontend-lib';
import {MatModule} from '../../../../../../util/mat/mat.module';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {NgForOf} from '@angular/common';

@Component({
  selector: 'app-activity-meta-attribute',
  imports: [
    MatModule,
    ReactiveFormsModule,
    NgForOf,
    FormsModule
  ],
  templateUrl: './meta-attribute-configuration.component.html',
  standalone: true,
  styleUrl: './meta-attribute-configuration.component.scss'
})
export class MetaAttributeConfigurationComponent implements OnInit {

  @Input("metaAttribute") metaAttribute: MetaAttribute = new MetaAttribute();

  allActivities: Activity[] = [];

  selectedActivities: Activity[] = [];
  filteredActivities: Activity[] = [...this.allActivities];
  inputValue: string = '';

  constructor(
    public activityService: BpmActivityModelingService,
    public metaAttributeConfigurationService: MetaAttributeConfigurationService,
  ) {
  }

  ngOnInit(): void {
   this.initActivities();
  }

  initActivities() {
    this.activityService.getAll().subscribe(res => {
      console.log(res);
      this.allActivities = res;
      this.filteredActivities = [...this.allActivities];

      if (this.metaAttribute.id != null) {
        this.metaAttributeConfigurationService.getByMetaAttributeId(this.metaAttribute.id).subscribe(res => {
          console.log(res);
          const activityIds = res.map((metaAttr: MetaAttributeConfiguration) => metaAttr.activityId);
          this.selectedActivities = this.allActivities.filter(activity => activityIds.includes(activity.id!));
        })
      }
    });
  }

  filterActivities(): void {
    const filterValue = this.inputValue.toLowerCase();
    this.filteredActivities = this.allActivities.filter(activity =>
      activity.name.toLowerCase().includes(filterValue)
    );
  }

  add(value: string, input: HTMLInputElement): void {
    const trimmedValue = value.trim();
    if (!trimmedValue) return;

    const foundActivity = this.allActivities.find(a => a.name.toLowerCase() === trimmedValue.toLowerCase());
    if (foundActivity && !this.selectedActivities.includes(foundActivity)) {
      this.selectedActivities.push(foundActivity);
    }

    input.value = '';
    this.inputValue = '';
    this.filteredActivities = [...this.allActivities];
  }

  remove(activity: Activity): void {
    this.selectedActivities = this.selectedActivities.filter(a => a !== activity);
  }

  selected(activity: Activity, input: HTMLInputElement): void {
    if (!this.selectedActivities.includes(activity)) {
      this.selectedActivities.push(activity);
    }

    input.value = '';
    this.inputValue = '';
    this.filteredActivities = [...this.allActivities];
  }

  save(id: string) {
    const metaAttributeConfigurations: MetaAttributeConfiguration[] = this.selectedActivities.map(activity => {
      return {
        id: undefined,
        activityId: activity.id!,
        metaAttributeId: id
      }
    });
    console.log(id);
    this.metaAttributeConfigurationService.createAll(metaAttributeConfigurations, '', this.metaAttribute.id!).subscribe(res => {
      console.log(res);
    });
  }
}
