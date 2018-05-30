import { Component, OnInit } from '@angular/core';
import {MatDialogRef} from '@angular/material';

@Component({
  selector: 'app-confirm-dialog',
  templateUrl: './confirm-dialog.component.html',
  styleUrls: ['./confirm-dialog.component.css']
})
export class ConfirmDialogComponent implements OnInit {
  public confirm_message: string;
  public confirm_title: string;

  constructor(public dialogRef: MatDialogRef<ConfirmDialogComponent>) {}

  ngOnInit() { }

}
