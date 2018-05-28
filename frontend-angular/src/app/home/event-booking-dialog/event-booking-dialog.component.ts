import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA} from '@angular/material';
import {IEventJSON} from '../../model/iEventJSON';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {BookingService} from '../../services/booking.service';
import {UserService} from '../../services/user.service';

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
              private _bookingService: BookingService,
              private _userService: UserService) { }

  ngOnInit() {
    this.bookingFormGroup = this._formBuilder.group({
      event_id: this.event.event_id,
      first_name: UserService.getCurrentUser().first_name,
      last_name: UserService.getCurrentUser().last_name,
      email: UserService.getCurrentUser().email,
      quantity: ['', Validators.required],
      promotional_code: '',
    });
  }

  revert() { this.bookingFormGroup.reset(); }

  createBooking() {
    const user = {'username': UserService.getCurrentUser().username,
                  'email': UserService.getCurrentUser().email};
    const payload = {
      'event': this.bookingFormGroup.controls['event_id'].value,
      'user': user,
      'quantity': this.bookingFormGroup.controls['quantity'].value,
      'promotional_code': this.bookingFormGroup.controls['promotional_code'].value,
    };
    this._bookingService.postBooking(payload).subscribe(
      () => console.log(),
      (err) => console.error(err)
    );
  }
}
