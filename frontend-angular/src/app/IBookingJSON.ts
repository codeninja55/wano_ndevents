export interface IBookingJSON {
  booking_id?: number;
  event_id?: number;
  first_name: string;
  last_name: string;
  email: string;
  quantity: number;
  promotional_code: string;
  date_created?: string;
}
