import * as moment from 'moment';
import {iEventJSON} from './iEventJSON';

export class CEvent {
  event_id: number;
  title: string;
  venue: string;
  capacity_max: number;
  capacity_expected: number;
  description: string;
  organisers_name: number;
  date_start: Date;
  date_end: Date;
  launch_date: any;
  is_launched: boolean;
  date_created: Date;
  last_updated: Date;
  url: URL;

  // These are formats passed from API
  protected dateFormat = 'YYYY-MM-DD';
  protected timeFormat = 'HH:MM';
  protected dateTimeFormat = this.dateFormat + ' ' + this.timeFormat;

  constructor(event_id: number, title: string, venue: string, capacity_max: number, capacity_expected: number,
              organisers_name: number, date_start: string, date_end: string, time_start: string, time_end: string,
              is_launched: boolean, date_created: string, last_updated: string, url: URL,
              launch_date?: string, description?: string) {

    this.event_id = event_id;
    this.title = title;
    this.venue = venue;
    this.capacity_max = capacity_max;
    this.capacity_expected = capacity_expected;
    this.description = description;
    this.organisers_name = organisers_name;
    // Convert date_start (YYYY-MM-DD) and time_start (hh:mm) to a single Date object
    this.date_start = moment(date_start + ' ' + time_start, this.dateTimeFormat).toDate();
    this.date_end = moment(date_end + ' ' + time_end, this.dateTimeFormat).toDate();
    // this.launch_date = moment(launch_date).toDate();
    this.launch_date = launch_date;
    this.is_launched = is_launched;
    // date_created and last_updated formatted from api: YYYY-MM-DDTHH:mm:ssZ
    this.date_created = moment(date_created).toDate();  // Same as launch_date
    this.last_updated = moment().toDate();
    this.url = url;

  }

  static getTimeString(time: Date): string {
    return moment(time).format('hh:mm A');
  }

  static getDateString(date: Date): string {
    return moment(date).format('YYYY-MM-DD');
  }

  /*toJSON(): iEventJSON {
    return Object.assign({}, this, {

    });
  }*/

  /* fromJSON is used to convert a serialized version of the cEvent to an instance of the class */
  static fromJSON(json: iEventJSON): CEvent {
    // create an instance of the cEvent class
    const event = Object.create(CEvent.prototype);
    // copy all the fields from the json object
    return Object.assign(event, json, {
      date_start: moment(json.date_start + ' ' + json.time_start, event.dateTimeFormat).toDate(),
      date_end: moment(json.date_end + ' ' + json.time_end, event.dateTimeFormat).toDate(),
      // launch_date: null ? '' : moment(json.launch_date).toDate(),
      date_created: moment(json.date_created).toDate(),
      last_updated: moment().toDate()
    });
  }

  /* reviver can be passed as the second parameter to JSON.parse to automatically call User.fromJSON on the resulting value. */
  static reviver(key: string, value: any): any {
    return key === '' ? CEvent.fromJSON(value) : value;
  }
}
