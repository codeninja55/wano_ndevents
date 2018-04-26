import * as moment from 'moment';
import {Event} from './event';

export class Booking {
  booking_id?: number;
  event_id: number;
  first_name: string;
  last_name: string;
  email: string;
  quantity: number;
  promotional_code: string;
  date_created?: Date;

  constructor(iBooking: IBooking) {
    this.booking_id = iBooking.booking_id;
    this.event_id = iBooking.event_id;
    this.first_name = iBooking.first_name;
    this.last_name = iBooking.last_name;
    this.email = iBooking.email;
    this.quantity = iBooking.quantity;
    this.promotional_code = iBooking.promotional_code;
    this.date_created = moment(iBooking.date_created).toDate();
  }

  /* reviver can be passed as the second parameter to JSON.parse to automatically call User.fromJSON on the resulting value. */
  static reviver(key: string, value: any): any {
    return key === '' ? Event.fromJSON(value) : value;
  }

  /* fromJSON is used to convert a serialized version of the cEvent to an instance of the class */
  static fromJSON(json: IBooking): Event {
    // create an instance of the cEvent class
    const event = Object.create(Booking.prototype);
    // copy all the fields from the json object
    return Object.assign(event, json, {});
  }

  // toJSON is automatically used by JSON.stringify
  static toJSON(booking: Booking): IBooking {

    // Return a specific format that is required by the API endpoint
    return {
      first_name: booking.first_name,
      last_name: booking.last_name,
      email: booking.email,
      quantity: booking.quantity,
      promotional_code: booking.promotional_code
    };
  }

}
