import * as moment from 'moment';
import {IEventJSON} from './iEventJSON';
import {IUserJSON} from './IUserJSON';

export class Event {
  event_id?: number;
  title: string;
  organisers_name: IUserJSON;
  description: string;
  venue: string;
  capacity_max: number;
  capacity_expected: number;
  bookings_available: number;
  bookings_made: number;
  promotional_code: string;
  price: number;
  event_bookings: any;
  date_start: Date;
  date_end: Date;
  is_launched: boolean;
  launch_date?: any;
  date_created?: any;
  last_updated?: any;
  url: URL;

  constructor(iEvent: IEventJSON) {
    this.event_id = iEvent.event_id;
    this.organisers_name = iEvent.organisers_name;
    this.title = iEvent.title;
    this.description = iEvent.description;
    this.venue = iEvent.venue;
    this.capacity_max = iEvent.capacity_max;
    this.capacity_expected = iEvent.capacity_expected;
    this.bookings_available = iEvent.bookings_available;
    this.bookings_made = iEvent.bookings_made;
    this.promotional_code = iEvent.promotional_code;
    this.price = iEvent.price;
    this.event_bookings = iEvent.event_bookings;
    // Convert date_start (YYYY-MM-DD) and time_start (hh:mm) to a single Date object
    this.date_start = moment(iEvent.date_start, 'YYYY-MM-DD HH:MM').toDate();
    this.date_end = moment(iEvent.date_end, 'YYYY-MM-DD HH:MM').toDate();
    // this.launch_date = moment(launch_date).toDate();
    this.launch_date = iEvent.launch_date;
    this.is_launched = iEvent.is_launched;
    // date_created and last_updated formatted from api: YYYY-MM-DDTHH:mm:ssZ
    this.date_created = moment(iEvent.date_created).toDate();  // Same as launch_date
    this.last_updated = moment(iEvent.last_updated).toDate();
    this.url = iEvent.url;
  }

  /* fromJSON is used to convert a serialized version of the cEvent to an instance of the class */
  static fromJSON(json: IEventJSON): Event {
    // create an instance of the cEvent class
    const event = Object.create(Event.prototype);
    // copy all the fields from the json object
    return Object.assign(event, json, {
      date_start: moment(json.date_start).toDate(),
      date_end: moment(json.date_end).toDate(),
      date_created: moment(json.date_created).toDate(),
      last_updated: moment(json.last_updated).toDate()
    });
  }

  /* reviver can be passed as the second parameter to JSON.parse to automatically call User.fromJSON on the resulting value. */
  static reviver(key: string, value: any): any {
    return key === '' ? Event.fromJSON(value) : value;
  }

  // toJSON is automatically used by JSON.stringify
  static toJSON(event: Event): IEventJSON {
    const organiser = {
      username: event.organisers_name.username,
      email: event.organisers_name.email
    };
    // Return a specific format that is required by the API endpoint
    return {
      organisers_name: organiser,
      title: event.title,
      description: event.description,
      venue: event.venue,
      capacity_max: event.capacity_max,
      capacity_expected: event.capacity_expected,
      promotional_code: event.promotional_code,
      price: event.price,
      date_start: moment(event.date_start, 'YYYY-MM-DD HH:MM').format('YYYY-MM-DD HH:MM'),
      date_end: moment(event.date_end, 'YYYY-MM-DD HH:MM').format('YYYY-MM-DD HH:MM'),
      launch_date: event.launch_date,
      is_launched: event.is_launched
    };
  }
}
