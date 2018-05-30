import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA} from '@angular/material';
import {BookingService} from '../../services/booking.service';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {Booking} from '../../model/booking';
import {UserService} from '../../services/user.service';

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
    payment: new FormControl({value: this.booking.payment}),
    promotional_code: new FormControl(),
  });

  constructor(@Inject(MAT_DIALOG_DATA) public booking: Booking,
              private _formBuilder: FormBuilder,
              private _bookingService: BookingService,
              private _userService: UserService) {
    this.createForm();
  }

  ngOnInit() { }

  createForm(): void {
    this.bookingFormGroup = this._formBuilder.group({
      event_id: [this.booking.event.event_id, Validators.required],
      first_name: UserService.getCurrentUser().first_name,
      last_name: UserService.getCurrentUser().last_name,
      email: UserService.getCurrentUser().email,
      quantity: [this.booking.quantity, Validators.required],
      payment: this.booking.payment,
      promotional_code: this.booking.promotional_code,
    });
  }

  updateBooking() {
    const editedBooking = Booking.toJSON(new Booking(this.bookingFormGroup.value));
    this._bookingService.putBookings(this.booking.booking_id, editedBooking).subscribe(
      () => console.log('[DEBUG]: Booking put method complete')
    );
  }
}
