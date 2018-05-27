import {Component, OnInit} from '@angular/core';
import {BookingService} from '../../services/booking.service';
import {Observable} from 'rxjs';
import {Booking} from '../../model/booking';
import {Event} from '../../model/event';
import {EventService} from '../../services/event.service';
import {MatDialog} from '@angular/material';
import {BookingEditDialogComponent} from '../booking-edit-dialog/booking-edit-dialog.component';

@Component({
  selector: 'app-home-booking-dash',
  templateUrl: './home-booking-dash.component.html',
  styleUrls: ['./home-booking-dash.component.css']
})
export class HomeBookingDashComponent implements OnInit {
  bookings$: Observable<Booking[]>;
  events$: Observable<Event[]>;

  constructor(private _bookingServer: BookingService,
              private _eventService: EventService,
              private _dialog: MatDialog) { }

  ngOnInit() {
    this.bookings$ = this._bookingServer.getAllBookings();
    this.events$ = this._eventService.getEvents();
  }

  openDialog(booking: Booking): void {
    const dialogRef = this._dialog.open(BookingEditDialogComponent, {
      width: '70%',
      data: booking,
    });
  }

  cancelBooking(id: number): void {
    this._bookingServer.deleteBooking(id).subscribe(
      () => console.log('[DEBUG]: Deleted booking id: ' + id)
    );
  }
}
