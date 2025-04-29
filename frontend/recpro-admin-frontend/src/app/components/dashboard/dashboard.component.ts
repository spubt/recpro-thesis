import { Component } from '@angular/core';
import {RouterLink} from '@angular/router';
import {BpmActivityModelingService, BpmProcessModelingService, MetaAttributeModelingService} from '@recprocess/recpro-frontend-lib';
import {ApiConstants} from '@recprocess/recpro-frontend-lib';


@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [
    RouterLink
  ],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent {
  constructor(
    private processService: BpmProcessModelingService,
    private activityService: BpmActivityModelingService,
    private ercDataService: MetaAttributeModelingService
  ) {

    console.log(ApiConstants.BASE_API_URL);

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
}

