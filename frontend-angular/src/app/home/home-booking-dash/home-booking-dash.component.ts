import {Component, OnInit} from '@angular/core';
import {BookingService} from '../../booking.service';
import {Observable} from 'rxjs/Observable';
import {Booking} from '../../booking';
import {Event} from '../../event';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {EventService} from '../../event.service';

@Component({
  selector: 'app-home-booking-dash',
  templateUrl: './home-booking-dash.component.html',
  styleUrls: ['./home-booking-dash.component.css']
})
export class HomeBookingDashComponent implements OnInit {
  public editable = true;
  bookings$: Observable<Booking[]>;
  events$: Observable<Event[]>;

  bookingFormGroup = new FormGroup({
    event_id: new FormControl(),
    first_name: new FormControl(),
    last_name: new FormControl(),
    email: new FormControl(),
    quantity: new FormControl(),
    promotional_code: new FormControl(),
  });

  constructor(private _bookingServer: BookingService,
              private _formBuilder: FormBuilder,
              private _eventService: EventService) { }

  ngOnInit() {
    this.bookings$ = this._bookingServer.getAllBookings();
    this.events$ = this._eventService.getEvents();
    this.createForm();
  }

  createForm(): void {
    this.bookingFormGroup = this._formBuilder.group({
      event_id: ['', Validators.required],
      first_name: ['', Validators.required],
      last_name: ['', Validators.required],
      email: ['', Validators.required],
      quantity: ['', Validators.required],
      promotional_code: '',
    });
  }

  updateBooking(): void {
    // Implementation required
  }

  cancelBooking(id: number): void {
    this._bookingServer.deleteBooking(id).subscribe(
      () => console.log('[DEBUG]: Deleted booking id: ' + id)
    );
  }
}
