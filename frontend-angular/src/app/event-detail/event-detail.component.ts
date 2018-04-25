import {Component, OnInit} from '@angular/core';
import {EventService} from '../event.service';
import {Event} from '../event';
import {ActivatedRoute} from '@angular/router';
import {Location} from '@angular/common';
import * as moment from 'moment';
import {DisplayCompService} from '../display-comp.service';

@Component({
  selector: 'app-event-detail',
  templateUrl: './event-detail.component.html',
  styleUrls: ['./event-detail.component.css']
})
export class EventDetailComponent implements OnInit {
  event: Event;
  model = <IPostEventJSON>{};
  editable = true;
  submitted = false;

  constructor(private _eventService: EventService,
              private _route: ActivatedRoute,
              private _location: Location,
              private _displayService: DisplayCompService) { }

  ngOnInit() {
    this._route.params.subscribe( () => {
      this.getEvent();
    });
    this._displayService.emitChange(true);
    this._displayService.toggleBookingsTab(true);
  }

  getEvent(): void {
    const id = +this._route.snapshot.paramMap.get('id');
    this._eventService.getEvent(id).subscribe(
      data => {
        this.event = Event.fromJSON(data);
        console.log(this.event);
      },
      err => console.error(err),
      () => {
        this.model.title = this.event.title;
        this.model.description = this.event.description;
        this.model.venue = this.event.venue;
        this.model.date_start = moment(this.event.date_start).format('YYYY-MM-DD');
        this.model.date_end = moment(this.event.date_end).format('YYYY-MM-DD');
        this.model.time_start = moment(this.event.date_start).format('HH:MM');
        this.model.time_end = moment(this.event.date_end).format('HH:MM');
        this.model.capacity_max = this.event.capacity_max;
        this.model.capacity_expected = this.event.capacity_expected;
        this.model.organisers_name = this.event.organisers_name;
        this.model.launch_date = this.event.launch_date;
        this.model.is_launched = this.event.is_launched;
      }
    );
  }

  toggleEdit(): void {
    this.editable = !this.editable;
  }

  onSubmit() {
    this.submitted = true;
    this.toggleEdit();

    this.model.date_start = moment(this.model.date_start).add(this.model.time_start.split(':')[0], 'h')
      .add(this.model.time_start.split(':')[1], 'm').format('YYYY-MM-DD HH:MM');
    this.model.date_end = moment(this.model.date_end).add(this.model.time_end.split(':')[0], 'h')
      .add(this.model.time_end.split(':')[1], 'm').format('YYYY-MM-DD HH:MM');

    const editedEvent = Event.toJSON(new Event(this.model));
    console.log(editedEvent);

    this._eventService.putEvent(this.event.event_id, editedEvent).subscribe(() => {
      console.log('[DEBUG]: Put method complete');
    },
      err => console.log(err),
    );
  }

  deleteEvent(): void {
    this._eventService.deleteEvent(this.event.event_id).subscribe(() => {
        console.log('[DEBUG]: Delete method complete.');
      },
      err => console.log(err),
    );
  }

  // TODO: Remove diagnostic when done
  // get diagnostic() { return JSON.stringify(this.model); }
}
