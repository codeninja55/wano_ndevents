import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA} from '@angular/material';
import {IEventJSON} from '../../model/iEventJSON';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {BookingService} from '../../services/booking.service';
import {UserService} from '../../services/user.service';
import {PositiveNumberValidator} from '../../validate-positive.directive';
import {ExceedCapacityValidator} from '../../validate-capacity.directive';

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
      quantity: '',
      promotional_code: '',
    }, {'validator': PositiveNumberValidator.validate('quantity')});
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
    this._bookingService.postBooking(payload).subscribe();
  }
}
