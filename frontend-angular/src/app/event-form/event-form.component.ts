import {Component, OnInit} from '@angular/core';
import {iEventJSON} from '../iEventJSON';
import moment = require('moment');

@Component({
  selector: 'app-event-form',
  templateUrl: './event-form.component.html',
  styleUrls: ['./event-form.component.css']
})
export class EventFormComponent implements OnInit {

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

  model = new iEventJSON;
  submitted = false;

  constructor() { }

  ngOnInit() { }

  onSubmit() {
    this.submitted = true;
    this.model.date_created = moment().format('YYYY-MM-DD');
    this.model.last_updated = moment().format('YYYY-MM-DD');
    this.model.is_launched = false;
    const data = JSON.stringify(this.model);
    console.log(data);
  }

  // TODO: Remove diagnostic when done
  get diagnostic() { return JSON.stringify(this.model); }
}
