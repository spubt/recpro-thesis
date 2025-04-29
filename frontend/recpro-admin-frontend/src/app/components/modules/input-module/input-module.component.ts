import { Component } from '@angular/core';
import {RouterLink} from '@angular/router';

@Component({
  selector: 'app-input-module',
  imports: [
    RouterLink
  ],
  standalone: true,
  templateUrl: './input-module.component.html',
  styleUrl: './input-module.component.scss'
})
export class InputModuleComponent {

}
