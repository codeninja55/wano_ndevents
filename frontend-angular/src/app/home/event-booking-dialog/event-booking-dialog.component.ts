import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA} from '@angular/material';
import {Event} from '../../event';
import {IEventJSON} from '../../iEventJSON';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-event-booking-dialog',
  templateUrl: './event-booking-dialog.component.html',
  styleUrls: ['./event-booking-dialog.component.css']
})
export class EventBookingDialogComponent implements OnInit {
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;

  constructor(@Inject(MAT_DIALOG_DATA) public event: IEventJSON,
              private _formBuilder: FormBuilder) { }

  ngOnInit() {
    this.firstFormGroup = this._formBuilder.group({
    });

    this.secondFormGroup = this._formBuilder.group({
      secondCtrl: ['', Validators.required]
    });
  }

}
