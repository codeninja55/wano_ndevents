import {Component, OnInit} from '@angular/core';
import {Booking} from '../../model/booking';
import {BookingService} from '../../services/booking.service';

@Component({
  selector: 'app-bookings-tab',
  templateUrl: './bookings-tab.component.html',
  styleUrls: ['./bookings-tab.component.css']
})
export class BookingsTabComponent implements OnInit {
  bookings: Booking[];
  event_id: number;

  constructor(private _bookingService: BookingService) {
    _bookingService.eventAnnounced$.subscribe(
      (event_id) => {
        this.event_id = event_id;
        this.getBookings(event_id);
      },
      (err) => console.log(err)
    );
  }

  ngOnInit() { }

  getBookings(id: number): void {
    this._bookingService.getBookings(id).subscribe(
      (data) => this.bookings = data,
      (err) => console.error(err),
      () => console.log(this.bookings)
    );
  }

  deleteBooking(id: number): void {
    this._bookingService.deleteBooking(id).subscribe(
      () => console.log('[DEBUG]: Delete booking complete')
    );

    this.getBookings(this.event_id);
  }

}
