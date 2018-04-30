import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA} from '@angular/material';
import {IBookingJSON} from '../../IBookingJSON';
import {BookingService} from '../../booking.service';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {Booking} from '../../booking';

@Component({
  selector: 'app-booking-edit-dialog',
  templateUrl: './booking-edit-dialog.component.html',
  styleUrls: ['./booking-edit-dialog.component.css']
})
export class BookingEditDialogComponent implements OnInit {
  bookingFormGroup = new FormGroup({
    event_id: new FormControl(),
    first_name: new FormControl(),
    last_name: new FormControl(),
    email: new FormControl(),
    quantity: new FormControl(),
    promotional_code: new FormControl(),
  });

  constructor(@Inject(MAT_DIALOG_DATA) public booking: IBookingJSON,
              private _formBuilder: FormBuilder,
              private _bookingService: BookingService) {
    this.createForm();
  }

  ngOnInit() { }

  createForm(): void {
    this.bookingFormGroup = this._formBuilder.group({
      event_id: [this.booking.event_id, Validators.required],
      first_name: [this.booking.first_name, Validators.required],
      last_name: [this.booking.last_name, Validators.required],
      email: [this.booking.email, Validators.required],
      quantity: [this.booking.quantity, Validators.required],
      promotional_code: this.booking.promotional_code,
    });
  }

  onSubmit() {
    const editedBooking = Booking.toJSON(new Booking(this.bookingFormGroup.value));
    this._bookingService.putBookings(this.booking.booking_id, editedBooking).subscribe(
      () => console.log('[DEBUG]: Booking put method complete')
    );
  }
}
