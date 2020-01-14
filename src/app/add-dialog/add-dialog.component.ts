import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-add-dialog',
  templateUrl: './add-dialog.component.html',
  styleUrls: ['./add-dialog.component.css']
})
export class AddDialogComponent implements OnInit {

  constructor(private dialogRef: MatDialogRef<AddDialogComponent>){ }

  ngOnInit() {
  }
  cancel() {
    this.dialogRef.close();
  }

}
