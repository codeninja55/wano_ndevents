import {Time} from '@angular/common';

export class Event {
  event_id: number;
  title: string;
  venue: string;
  description: string;
  organisers_name: number;
  date_start: Date;
  date_end: Date;
  time_start: Time;
  time_end: Time;
  launch_date: Date;
  is_launched: boolean;

  constructor(event_id: string, title: string, venue: string, description: string,
              organisers_name: string, date_start: string, date_end: string,
              time_start: string, time_end: string, launch_date: string,
              is_launched: boolean) {

    this.event_id = parseInt(event_id, base);
    this.title = title;
    this.venue = venue;
    this.description = description;
    this.organisers_name = parseInt(organisers_name, base);


    this.date_start = new Date(date_start);
    this.date_end = new Date(date_end);

    /*TODO: NEED TO INIT TIME*/

    this.launch_date = new Date(launch_date);
    this.is_launched = is_launched;
  }
}
