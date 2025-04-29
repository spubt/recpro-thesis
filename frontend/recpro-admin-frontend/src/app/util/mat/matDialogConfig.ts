import { MatDialogConfig } from '@angular/material/dialog';

export const DEFAULT_DIALOG_CONFIG: MatDialogConfig = {
  minWidth: '800',
  minHeight: '500',
  disableClose: true,
  hasBackdrop: true,
  autoFocus: true,
  panelClass: 'custom-dialog-container'
};
