import * as moment from 'moment';
import {Event} from './event';
import {IBookingJSON} from './IBookingJSON';
import {IUserJSON} from './IUserJSON';

export class Booking {
  booking_id?: number;
  event_id: number;
  user: IUserJSON;
  quantity: number;
  promotional_code: string;
  date_created?: Date;

  constructor(iBooking: IBookingJSON) {
    this.booking_id = iBooking.booking_id;
    this.event_id = iBooking.event_id;
    this.user = iBooking.user;
    this.quantity = iBooking.quantity;
    this.promotional_code = iBooking.promotional_code;
    this.date_created = moment(iBooking.date_created).toDate();
  }

  /* fromJSON is used to convert a serialized version of the cEvent to an instance of the class */
  static fromJSON(json: IBookingJSON): Event {
    // create an instance of the cEvent class
    const event = Object.create(Booking.prototype);
    // copy all the fields from the json object
    return Object.assign(event, json, {});
  }

  // toJSON is automatically used by JSON.stringify
  static toJSON(booking: Booking): IBookingJSON {

    // Return a specific format that is required by the API endpoint
    return {
      event_id: booking.event_id,
      quantity: booking.quantity,
      promotional_code: booking.promotional_code,
      user: booking.user
    };
  }

}
