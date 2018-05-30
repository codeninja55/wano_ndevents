import {switchMap} from 'rxjs/operators';
import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, ParamMap, Router} from '@angular/router';

import {Observable} from 'rxjs';
import {Location} from '@angular/common';
import {EventService} from '../../services/event.service';
import {BookingService} from '../../services/booking.service';
import {Event} from '../../model/event';
import * as moment from 'moment';
import {DisplayCompService} from '../../services/display-comp.service';
import {IEventJSON} from '../../model/iEventJSON';
import {MatDialog} from '@angular/material';
import {ConfirmDialogComponent} from '../../confirm-dialog/confirm-dialog.component';

@Component({
  selector: 'app-event-detail',
  templateUrl: './event-detail.component.html',
  styleUrls: ['./event-detail.component.css']
})
export class EventDetailComponent implements OnInit {
  event$: Observable<Event>;
  event: Event;
  event_model = <IEventJSON>{};
  editable = true;
  submitted = false;
  toggle = false;

  constructor(private _eventService: EventService,
              private _route: ActivatedRoute,
              private _router: Router,
              private _location: Location,
              private _displayService: DisplayCompService,
              private _bookingService: BookingService,
              private _dialog: MatDialog) { }

  ngOnInit() {
    // this._displayService.emitChange(true);
    this._displayService.toggleMatFabDisplay(true);

    this.refreshData();
  }

  refreshData(): void {
    // Old way, not recommended as params might be deprecated
    this._route.params.subscribe( () => {
      const id = +this._route.snapshot.paramMap.get('id');
      this.getEvent(id);
    });
    this.event$ = this._route.paramMap.pipe(
      switchMap((params: ParamMap) => this._eventService.getEvent(+params.get('id'))));

    this.event$.subscribe();
  }

  getEvent(id: any): void {
    // const id = +this._route.snapshot.paramMap.get('id');
    this._eventService.getEvent(id).subscribe(
      data => {
        this.event = data;
        this._bookingService.sendEventID(this.event.event_id);
      },
      err => console.error(err),
      () => {
        // console.log(this.event);
        this.event_model.organisers_name = this.event.organisers_name;
        this.event_model.title = this.event.title;
        this.event_model.description = this.event.description;
        this.event_model.venue = this.event.venue;
        this.event_model.capacity_max = this.event.capacity_max;
        this.event_model.capacity_expected = this.event.capacity_expected;
        this.event_model.bookings_available = this.event.bookings_available;
        this.event_model.bookings_made = this.event.bookings_made;
        this.event_model.date_start = moment(this.event.date_start).format('YYYY-MM-DD');
        this.event_model.date_end = moment(this.event.date_end).format('YYYY-MM-DD');
        this.event_model.time_start = moment(this.event.date_start).format('HH:MM');
        this.event_model.time_end = moment(this.event.date_end).format('HH:MM');
        this.event_model.price = this.event.price;
        this.event_model.promotional_code = this.event.promotional_code;
        this.event_model.launch_date = this.event.launch_date;
        this.event_model.is_launched = this.event.is_launched;
      }
    );
  }

  toggleEdit(): void {
    this.editable = !this.editable;
  }

  showBookings(): void {
    this.toggle = !this.toggle;
    this._displayService.toggleBookingsTab(this.toggle);
  }

  onSubmit() {
    this.submitted = true;
    this.toggleEdit();

    this.event_model.date_start = moment(this.event_model.date_start).add(this.event_model.time_start.split(':')[0], 'h')
      .add(this.event_model.time_start.split(':')[1], 'm').format('YYYY-MM-DD HH:MM');
    this.event_model.date_end = moment(this.event_model.date_end).add(this.event_model.time_end.split(':')[0], 'h')
      .add(this.event_model.time_end.split(':')[1], 'm').format('YYYY-MM-DD HH:MM');

    const editedEvent = Event.toJSON(new Event(this.event_model));

    this._eventService.putEvent(this.event.event_id, editedEvent).subscribe(() => {
      console.log('[DEBUG]: Put method complete');
    },
      err => console.log(err),
    );

    this.refreshData();
  }

  launchEvent(): void {
    this.event_model.is_launched = true;
    this.event_model.launch_date = moment().format();

    this.event_model.date_start = moment(this.event_model.date_start).add(this.event_model.time_start.split(':')[0], 'h')
      .add(this.event_model.time_start.split(':')[1], 'm').format('YYYY-MM-DD HH:MM');
    this.event_model.date_end = moment(this.event_model.date_end).add(this.event_model.time_end.split(':')[0], 'h')
      .add(this.event_model.time_end.split(':')[1], 'm').format('YYYY-MM-DD HH:MM');

    const launched_event = Event.toJSON(new Event(this.event_model));

    this._eventService.putEvent(this.event.event_id, launched_event).subscribe(() => {
        console.log('[DEBUG]: Event launch complete');
      },
      err => console.log(err),
    );

    this.refreshData();
  }

  deleteEvent(): void {
    this._eventService.deleteEvent(this.event.event_id).subscribe(() => {
        console.log('[DEBUG]: Delete method complete.');
      },
      err => console.log(err),
    );

    const confirmDetails = {
      'confirm_title': 'Delete Event',
      'confirm_message': 'Are you sure you would like to delete ' + this.event.title,
    };

    const confirmDialog = this._dialog.open(ConfirmDialogComponent, {
      width: '40%',
      data: confirmDetails,
    });

    this._router.navigate(['/admin']);

    this._eventService.getEvents();
  }
}
