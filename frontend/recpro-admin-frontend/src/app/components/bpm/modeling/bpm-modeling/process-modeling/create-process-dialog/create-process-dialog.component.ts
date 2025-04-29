import {Component, Inject} from '@angular/core';
import {MatModule} from '../../../../../../util/mat/mat.module';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {BpmProcessModelingService, Process, ProcessStatus} from '@recprocess/recpro-frontend-lib';
import {FormsModule} from '@angular/forms';
import {NgForOf} from '@angular/common';

@Component({
  selector: 'app-create-process-dialog',
  imports: [
    MatModule,
    FormsModule,
    NgForOf,
  ],
  standalone: true,
  templateUrl: './create-process-dialog.component.html',
  styleUrl: './create-process-dialog.component.scss'
})
export class CreateProcessDialogComponent {

  status: ProcessStatus[] = Object.values(ProcessStatus);
  priority: number[] = [];
  editable: boolean = false;
  process: Process = new Process();

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private dialogRef: MatDialogRef<CreateProcessDialogComponent>,
    private service: BpmProcessModelingService
    ) {
    this.priority = Array.from({ length: 100 }, (_, i) => i + 1);



    if (this.data.process === null || this.data.process === undefined) {
      this.process = new Process();
    } else {
      this.process = this.data.process;
    }

    this.editable = this.data.editable;
  }

  save() {
    console.log(this.process);
    if (this.editable) {
      this.service.create(this.process).subscribe(res => {
        console.log(res);
        this.dialogRef.close();
      });
    } else {
      this.dialogRef.close();
    }
  }
}
