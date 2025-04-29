import {Component, OnInit} from '@angular/core';
import {AsyncPipe, CommonModule} from '@angular/common';
import {NgxSpinnerComponent} from 'ngx-spinner';
import {Observable} from 'rxjs';
import {LoaderService} from './loader.service';

@Component({
  selector: 'app-loader',
  standalone: true,
  imports: [
    AsyncPipe,
    CommonModule,
    NgxSpinnerComponent
  ],
  templateUrl: './loader.component.html',
  styleUrl: './loader.component.scss'
})
export class LoaderComponent implements OnInit {
  isLoading: Observable<boolean> | undefined;

  constructor(private loaderService: LoaderService) {}

  ngOnInit() {
    this.isLoading = this.loaderService.isLoading.asObservable();
  }
}
