import {Component, OnInit, Renderer2} from '@angular/core';
import {EventService} from '../../event.service';
import {Observable} from 'rxjs';
import {Event} from '../../event';
import {EventBookingDialogComponent} from '../event-booking-dialog/event-booking-dialog.component';
import {MatDialog} from '@angular/material';

@Component({
  selector: 'app-event-dashboard',
  templateUrl: './event-dashboard.component.html',
  styleUrls: ['./event-dashboard.component.css']
})
export class EventDashboardComponent implements OnInit {
  events$: Observable<Event[]>;

  constructor(private _eventService: EventService,
              private _renderer2: Renderer2,
              private _dialog: MatDialog) { }

  ngOnInit() {
    this.events$ = this._eventService.getEvents();
  }

  // Add elevation classes when mouse hover over card
  mouseenter (event) {
    this._renderer2.addClass(event.target, 'mat-elevation-z7');
  }

  mouseleave (event) {
    this._renderer2.removeClass(event.target, 'mat-elevation-z7');
  }

  openDialog(event: Event) {
    const dialogRef = this._dialog.open(EventBookingDialogComponent, {
      width: '70%',
      data: event
    });
  }
}
