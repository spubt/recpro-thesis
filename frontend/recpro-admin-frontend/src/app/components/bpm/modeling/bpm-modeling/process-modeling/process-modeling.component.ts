import { Component } from '@angular/core';
import {CreateProcessDialogComponent} from './create-process-dialog/create-process-dialog.component';
import {BpmProcessModelingService, DialogService, Process} from '@recprocess/recpro-frontend-lib';
import {MatCard, MatCardContent} from '@angular/material/card';
import {MatIcon} from '@angular/material/icon';
import {MatIconButton} from '@angular/material/button';
import {MatMenu, MatMenuItem, MatMenuTrigger} from '@angular/material/menu';
import {ProcessTableComponent} from '@recprocess/recpro-frontend-lib';



@Component({
  selector: 'app-process-modeling',
  imports: [
    MatCard,
    MatCardContent,
    MatIcon,
    MatIconButton,
    MatMenu,
    MatMenuItem,
    ProcessTableComponent,
    MatMenuTrigger
  ],
  templateUrl: './process-modeling.component.html',
  standalone: true,
  styleUrl: './process-modeling.component.scss'
})
export class ProcessModelingComponent {

  processes: Process[] = [];

  constructor(
    private modelingService: BpmProcessModelingService,
    private dialogService: DialogService
  ) {
    this.getProcesses();
  }

  getProcesses() {
    this.modelingService.getAll().subscribe(res => {
      this.processes = res;
    });
  }

  editProcess(process: Process) {
    this.openProcessDialog(process, true);
  }

  viewProcess(process: Process) {
    this.openProcessDialog(process, false);
  }

  createProcess() {
    this.openProcessDialog(new Process(), true);
  }

  openProcessDialog(process: Process, editable: boolean) {
    const dialogRef = this.dialogService.open(CreateProcessDialogComponent, {
      process: process,
      editable: editable
    });

    dialogRef.afterClosed().subscribe(() => {
      this.modelingService.getAll();
    });
  }
}
