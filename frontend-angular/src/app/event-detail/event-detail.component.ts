import {Component, OnInit} from '@angular/core';
import {EventService} from '../event.service';
import {Event} from '../event';
import {ActivatedRoute} from '@angular/router';
import {Location} from '@angular/common';

@Component({
  selector: 'app-event-detail',
  templateUrl: './event-detail.component.html',
  styleUrls: ['./event-detail.component.css']
})
export class EventDetailComponent implements OnInit {
  event: Event;
  public time_start: string;
  public time_end: string;
  model = <IEventJSON>{};
  editable = true;

  constructor(private _eventService: EventService,
              private _route: ActivatedRoute,
              private _location: Location) { }

  ngOnInit() {
    this._route.params.subscribe( () => {
      this.getEvent();
    });
  }

  getEvent(): void {
    const id = +this._route.snapshot.paramMap.get('id');
    this._eventService.getEvent(id).subscribe(
      data => {
        this.event = Event.fromJSON(data);
        // Set the time_start and _end as strings that display in hh:mm A (i.e. 10:00 AM) format
        this.time_start = Event.getTimeString(this.event.date_start);
        this.time_end = Event.getTimeString(this.event.date_end);
        // Set the date_start and _end as strings that display in YYYY-MM-DD formation because that's that matDatePicker accepts
        console.log(this.event);
      },
      err => console.error(err),
    );
  }

  toggleEdit(): void {
    this.editable = !this.editable;
  }

  deleteEvent(): void {
    this._eventService.deleteEvent(this.event.event_id).subscribe(() => {
        console.log('[DEBUG]: Delete method complete.');
      },
      err => console.log(err),
    );
  }

  // TODO: Remove diagnostic when done
  get diagnostic() { return JSON.stringify(this.model); }
}
