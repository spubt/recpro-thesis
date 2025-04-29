import { Component } from '@angular/core';
import {MatModule} from '../../../../util/mat/mat.module';
import {
  BpmProcessExecutionService,
  BpmProcessModelingService,
  Process,
  ProcessTableComponent
} from '@recprocess/recpro-frontend-lib';
import {MatDialogRef} from '@angular/material/dialog';


@Component({
  selector: 'app-start-process-dialog',
  imports: [
    MatModule,
    ProcessTableComponent
  ],
  templateUrl: './start-process-dialog.component.html',
  standalone: true,
  styleUrl: './start-process-dialog.component.scss'
})
export class StartProcessDialogComponent {

  processes: Process[] = [];

  constructor(
    private modelingService: BpmProcessModelingService,
    private executionService: BpmProcessExecutionService,
  private dialogRef: MatDialogRef<StartProcessDialogComponent>,
  ) {
    this.getProcesses();
  }

  getProcesses() {
    this.modelingService.getAll().pipe().subscribe(res => {
      this.processes = res;
    });
  }

  startProcess(process: Process) {
    this.executionService.start(process.id!).subscribe(res => {
      console.log(res);
      this.dialogRef.close(res);
    });
  }
}
