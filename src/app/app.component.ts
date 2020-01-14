import { Component } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA, MatDialogConfig} from '@angular/material/dialog';
import {AddDialogComponent} from './add-dialog/add-dialog.component';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(public dialog: MatDialog) {}
  config: MatDialogConfig = {
    disableClose: false,
    hasBackdrop: true,
    autoFocus : true,
    backdropClass: '',
    width: '50%',
    height: '68%',
    position: {
        top: '',
        bottom: '',
        left: '',
        right: ''
    }
};
  openDialog() {
    const dialogConfig = new MatDialogConfig();

    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;

    const dialog =  this.dialog.open(AddDialogComponent, this.config);
    dialog.afterClosed().subscribe(result => {
      console.log('result');
    });
}
  }
