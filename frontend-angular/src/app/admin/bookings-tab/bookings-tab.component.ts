import {Component, OnInit} from '@angular/core';
import {Booking} from '../../model/booking';
import {BookingService} from '../../services/booking.service';
import {MatDialog} from '@angular/material';
import {ConfirmDialogComponent} from '../../confirm-dialog/confirm-dialog.component';
import {Router} from '@angular/router';

@Component({
  selector: 'app-bookings-tab',
  templateUrl: './bookings-tab.component.html',
  styleUrls: ['./bookings-tab.component.css']
})
export class BookingsTabComponent implements OnInit {
  bookings: Booking[];
  event_id: number;

  constructor(private _bookingService: BookingService,
              private _router: Router,
              private _dialog: MatDialog) {
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


    const confirmDialog = this._dialog.open(ConfirmDialogComponent, {
      width: '40%',
      disableClose: false,
    });

    confirmDialog.componentInstance.confirm_title = 'Delete Event';
    confirmDialog.componentInstance.confirm_message = 'Are you sure you would like to delete bookings';

    confirmDialog.afterClosed().subscribe(result => {
      if (result) {
        this._bookingService.deleteBooking(id).subscribe(
          () => console.log('[DEBUG]: Delete booking complete')
        );
        this._dialog = null;
        this._router.navigate(['/admin']);
      } else {
        this._router.navigate(['/admin/event', this.event_id])
      }
    });

    this.getBookings(this.event_id);
  }

}
