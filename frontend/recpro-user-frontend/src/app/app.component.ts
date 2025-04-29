import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {LoaderComponent} from './shared/loader/loader.component';
import {NgxSpinnerModule} from 'ngx-spinner';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, LoaderComponent, NgxSpinnerModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'recpro-user-frontend';
}
