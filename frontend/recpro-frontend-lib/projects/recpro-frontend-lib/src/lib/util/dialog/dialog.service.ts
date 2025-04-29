import { Injectable } from '@angular/core';
import {MatDialog, MatDialogConfig} from '@angular/material/dialog';
import {DEFAULT_DIALOG_CONFIG} from '@angular/cdk/dialog';

@Injectable({
  providedIn: 'root'
})
export class DialogService {
  constructor(private dialog: MatDialog) {}

  open<T, D = any, R = any>(
    component: any,
    data?: D,
    config?: MatDialogConfig
  ): any {
    const dialogConfig = {
      ...DEFAULT_DIALOG_CONFIG,
      ...config,
      data,
    };
    return this.dialog.open<T, D, R>(component, dialogConfig);
  }
}
