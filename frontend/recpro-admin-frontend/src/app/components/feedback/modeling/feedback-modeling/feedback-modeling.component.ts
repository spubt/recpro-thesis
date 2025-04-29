import {Component} from '@angular/core';
import {MatModule} from '../../../../util/mat/mat.module';
import {FeedbackTableComponent} from './feedback-table/feedback-table.component';

import {CreateFeedbackDialogComponent} from '../create-feedback-dialog/create-feedback-dialog.component';
import {DialogService, Feedback} from '@recprocess/recpro-frontend-lib';

@Component({
  selector: 'app-feedback-modeling',
  imports: [
    MatModule,
    FeedbackTableComponent
  ],
  standalone: true,
  templateUrl: './feedback-modeling.component.html',
  styleUrl: './feedback-modeling.component.scss'
})
export class FeedbackModelingComponent {

  constructor(
    private dialogService: DialogService,
  ) {
  }

  createFeedback() {
    this.dialogService.open(CreateFeedbackDialogComponent, new Feedback());
  }
}
