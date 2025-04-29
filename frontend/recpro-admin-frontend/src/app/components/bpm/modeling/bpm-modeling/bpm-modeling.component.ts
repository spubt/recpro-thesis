import { Component } from '@angular/core';
import {MatModule} from '../../../../util/mat/mat.module';
import {RouterLink} from '@angular/router';
@Component({
  selector: 'app-bpm-modeling',
  imports: [MatModule, RouterLink],
  standalone: true,
  templateUrl: './bpm-modeling.component.html',
  styleUrl: './bpm-modeling.component.scss'
})
export class BpmModelingComponent {



}
