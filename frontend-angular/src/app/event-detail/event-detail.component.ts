import {Component, OnInit} from '@angular/core';
import {EventService} from '../event.service';
import {CEvent} from '../cEvent';
import {ActivatedRoute} from '@angular/router';
import {Location} from '@angular/common';

@Component({
  selector: 'app-event-detail',
  templateUrl: './event-detail.component.html',
  styleUrls: ['./event-detail.component.css']
})
export class EventDetailComponent implements OnInit {
  // @Input eventTest: Event;
  // public eventJSON;
  public event: CEvent;
  public time_start: string;
  public time_end: string;
  public date_start: string;
  public date_end: string;

  constructor(private _eventService: EventService,
              private _route: ActivatedRoute,
              private _location: Location) { }

  ngOnInit() {
    this._route.params.subscribe( (params) => {
      // const id = params['id'];
      //   this.getEvent(id);
      console.log(params.id);
      this.getEvent();
    });
  }

  getEvent() {
    const id = +this._route.snapshot.paramMap.get('id');
    this._eventService.getEvent(id).subscribe(
      data => {
        // this.eventJSON = data;
        this.event = CEvent.fromJSON(JSON.parse(JSON.stringify(data)));
        // Set the time_start and _end as strings that display in hh:mm A (i.e. 10:00 AM) format
        this.time_start = CEvent.getTimeString(this.event.date_start);
        this.time_end = CEvent.getTimeString(this.event.date_end);
        // Set the date_start and _end as strings that display in YYYY-MM-DD formation because that's that matDatePicker accepts
        this.date_start = CEvent.getDateString(this.event.date_start);
        this.date_end = CEvent.getDateString(this.event.date_end);
      },
      err => console.error(err),
      // () =>
        // TODO: [DEBUG]
        // console.log(this.eventJSON)
    );
  }
}
