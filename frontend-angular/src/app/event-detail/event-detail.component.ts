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

  // TODO: This is to be used in the form for a drop down menu
  public timeOpt = [
    {value: '00:00', viewValue: '12:00 AM'}, {value: '00:30', viewValue: '12:30 AM'},
    {value: '01:00', viewValue: '01:00 AM'}, {value: '01:30', viewValue: '01:30 AM'},
    {value: '02:00', viewValue: '02:00 AM'}, {value: '02:30', viewValue: '02:30 AM'},
    {value: '03:00', viewValue: '03:00 AM'}, {value: '03:30', viewValue: '03:30 AM'},
    {value: '04:00', viewValue: '04:00 AM'}, {value: '04:30', viewValue: '04:30 AM'},
    {value: '05:00', viewValue: '05:00 AM'}, {value: '05:30', viewValue: '05:30 AM'},
    {value: '06:00', viewValue: '06:00 AM'}, {value: '06:30', viewValue: '06:30 AM'},
    {value: '07:00', viewValue: '07:00 AM'}, {value: '07:30', viewValue: '07:30 AM'},
    {value: '08:00', viewValue: '08:00 AM'}, {value: '08:30', viewValue: '08:30 AM'},
    {value: '09:00', viewValue: '09:00 AM'}, {value: '09:30', viewValue: '09:30 AM'},
    {value: '10:00', viewValue: '10:00 AM'}, {value: '10:30', viewValue: '10:30 AM'},
    {value: '11:00', viewValue: '11:00 AM'}, {value: '11:30', viewValue: '11:30 AM'},
    {value: '12:00', viewValue: '12:00 PM'}, {value: '12:30', viewValue: '12:30 PM'},
    {value: '13:00', viewValue: '01:00 PM'}, {value: '13:30', viewValue: '01:30 PM'},
    {value: '14:00', viewValue: '02:00 PM'}, {value: '14:30', viewValue: '02:30 PM'},
    {value: '15:00', viewValue: '03:00 PM'}, {value: '15:30', viewValue: '03:30 PM'},
    {value: '16:00', viewValue: '04:00 PM'}, {value: '16:30', viewValue: '04:30 PM'},
    {value: '17:00', viewValue: '05:00 PM'}, {value: '17:30', viewValue: '05:30 PM'},
    {value: '18:00', viewValue: '06:00 PM'}, {value: '18:30', viewValue: '06:30 PM'},
    {value: '19:00', viewValue: '07:00 PM'}, {value: '19:30', viewValue: '07:30 PM'},
    {value: '20:00', viewValue: '08:00 PM'}, {value: '20:30', viewValue: '08:30 PM'},
    {value: '21:00', viewValue: '09:00 PM'}, {value: '21:30', viewValue: '09:30 PM'},
    {value: '22:00', viewValue: '10:00 PM'}, {value: '22:30', viewValue: '10:30 PM'},
    {value: '23:00', viewValue: '11:00 PM'}, {value: '23:30', viewValue: '11:30 PM'},
  ];

  constructor(private _eventService: EventService,
              private _route: ActivatedRoute,
              private _location: Location) { }

  ngOnInit() {
    this._route.params.subscribe( (params) => {
      const id = params['id'];
        this.getEvent(id);
    });
  }

  getEvent(id: number) {
    // const id = +this._route.snapshot.paramMap.get('id');
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
