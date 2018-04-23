import * as moment from 'moment';

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

  constructor(iEvent: IEventJSON) {
    this.event_id = iEvent.event_id;
    this.title = iEvent.title;
    this.venue = iEvent.venue;
    this.capacity_max = iEvent.capacity_max;
    this.capacity_expected = iEvent.capacity_expected;
    this.description = iEvent.description;
    this.organisers_name = iEvent.organisers_name;
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

  static getTimeString(time: Date): string {
    return moment(time).format('hh:mm A');
  }

  static getDateString(date: Date): string {
    return moment(date).format('YYYY-MM-DD');
  }

  /* fromJSON is used to convert a serialized version of the cEvent to an instance of the class */
  static fromJSON(json: IEventJSON): CEvent {
    // create an instance of the cEvent class
    const event = Object.create(CEvent.prototype);
    // copy all the fields from the json object
    return Object.assign(event, json, {
      date_start: moment(json.date_start).toDate(),
      date_end: moment(json.date_end).toDate(),
      // launch_date: null ? '' : moment(json.launch_date).toDate(),
      date_created: moment(json.date_created).toDate(),
      last_updated: moment(json.last_updated).toDate()
    });
  }

  /* reviver can be passed as the second parameter to JSON.parse to automatically call User.fromJSON on the resulting value. */
  static reviver(key: string, value: any): any {
    return key === '' ? CEvent.fromJSON(value) : value;
  }

  // toJSON is automatically used by JSON.stringify
  toJSON(): IEventJSON {
    // copy all fields from `this` to an empty object and return in
    return Object.assign({}, this, {
      // convert fields that need converting
      date_start: moment(this.date_start, 'YYYY-MM-DD HH:MM').format(),
      date_end: moment(this.date_end, 'YYYY-MM-DD HH:MM').format(),
      last_updated: moment(this.last_updated).format(),
      date_created: moment(this.date_created).format(),
    });
  }
}
