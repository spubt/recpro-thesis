import {RouterModule, Routes} from '@angular/router';
import {BpmExecutionComponent} from './bpm-execution/bpm-execution.component';
import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';

const routes: Routes = [
  {
    path: 'execution',
    component: BpmExecutionComponent,
  }
]

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(routes),
    CommonModule
  ],
  exports: [RouterModule]
})

export class BpmRoutingModule {}
