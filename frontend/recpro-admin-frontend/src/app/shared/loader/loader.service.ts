import { Injectable } from '@angular/core';
import {Subject} from 'rxjs';
import {NgxSpinnerService} from 'ngx-spinner';

@Injectable({
  providedIn: 'root'
})
export class LoaderService {

  private requestCount = 0;
  isLoading = new Subject<boolean>();

  constructor(private spinner: NgxSpinnerService) {
  }

  show() {
    this.requestCount++;
    this.isLoading.next(true);
    this.spinner.show();
  }

  hide() {
    this.requestCount--;
    if (this.requestCount === 0) {
      this.spinner.hide();
    }
  }
}
