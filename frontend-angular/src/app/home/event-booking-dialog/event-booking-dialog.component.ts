import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA} from '@angular/material';
import {IEventJSON} from '../../iEventJSON';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {BookingService} from '../../booking.service';

@Component({
  selector: 'app-event-booking-dialog',
  templateUrl: './event-booking-dialog.component.html',
  styleUrls: ['./event-booking-dialog.component.css']
})
export class EventBookingDialogComponent implements OnInit {
  bookingFormGroup = new FormGroup({
    event_id: new FormControl(this.event.event_id),
    first_name: new FormControl(),
    last_name: new FormControl(),
    email: new FormControl(),
    quantity: new FormControl(),
    promotional_code: new FormControl(),
  });

  constructor(@Inject(MAT_DIALOG_DATA) public event: IEventJSON,
              private _formBuilder: FormBuilder,
              private _bookingService: BookingService) { }

  ngOnInit() {
    this.bookingFormGroup = this._formBuilder.group({
      event_id: this.event.event_id,
      first_name: ['', Validators.required],
      last_name: ['', Validators.required],
      email: ['', Validators.required],
      quantity: ['', Validators.required],
      promotional_code: '',
    });
  }

  revert() { this.bookingFormGroup.reset(); }

  createBooking() {
    this._bookingService.postBooking(this.bookingFormGroup.value).subscribe(
      () => console.log(),
      (err) => console.error(err)
      );
  }
}
