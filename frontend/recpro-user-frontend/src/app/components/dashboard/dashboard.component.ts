import { Component } from '@angular/core';
import {NgClass} from '@angular/common';
import {
  BpmActivityModelingService,
  BpmProcessModelingService,
  MetaAttributeModelingService
} from '@recprocess/recpro-frontend-lib';

@Component({
  selector: 'app-dashboard',
  imports: [
    NgClass
  ],
  templateUrl: './dashboard.component.html',
  standalone: true,
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent {

  constructor(
    private processService: BpmProcessModelingService,
    private activityService: BpmActivityModelingService,
    private ercDataService: MetaAttributeModelingService
  ) {

    this.processService.getAll().subscribe(res => {
      console.log(res);
    })

    this.activityService.getAll().subscribe(res => {
      console.log(res);
    })

    this.ercDataService.getAll().subscribe(res => {
      console.log(res);
    })
  }

  isCollapsed = false;

  toggleSidebar(): void {
    this.isCollapsed = !this.isCollapsed;
  }
}
