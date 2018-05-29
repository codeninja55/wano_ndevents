import {Component, OnInit, Renderer2} from '@angular/core';
import {BookingService} from '../../services/booking.service';
import {Observable} from 'rxjs';
import {Booking} from '../../model/booking';
import {DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE, MatDialog} from '@angular/material';
import {BookingEditDialogComponent} from '../booking-edit-dialog/booking-edit-dialog.component';
import {UserService} from '../../services/user.service';
import {MAT_MOMENT_DATE_FORMATS, MomentDateAdapter} from '@angular/material-moment-adapter';

@Component({
  selector: 'app-home-booking-dash',
  templateUrl: './home-booking-dash.component.html',
  styleUrls: ['./home-booking-dash.component.css'],
  providers: [{provide: DateAdapter, useClass: MomentDateAdapter, deps: [MAT_DATE_LOCALE]},
              {provide: MAT_DATE_FORMATS, useValue: MAT_MOMENT_DATE_FORMATS},
              {provide: MAT_DATE_LOCALE, useValue: 'en-au'}]
})
export class HomeBookingDashComponent implements OnInit {
  bookings$: Observable<Booking[]>;
  // events$: Observable<Event[]>;

  constructor(private _bookingService: BookingService,
              private _renderer2: Renderer2,
              private _dialog: MatDialog) { }

  ngOnInit() {
    this.bookings$ = this._bookingService.getUserBookings(UserService.getCurrentUser().pk);
    // this.events$ = this._eventService.getEvents();
  }

  // Add elevation classes when mouse hover over card
  mouseenter (event) {
    this._renderer2.addClass(event.target, 'mat-elevation-z7');
  }

  mouseleave (event) {
    this._renderer2.removeClass(event.target, 'mat-elevation-z7');
  }

  openDialog(booking: Booking): void {
    const dialogRef = this._dialog.open(BookingEditDialogComponent, {
      width: '70%',
      data: booking,
    });
  }

  cancelBooking(id: number): void {
    this._bookingService.deleteBooking(id).subscribe(
      () => console.log('[DEBUG]: Deleted booking id: ' + id)
    );
  }
}
