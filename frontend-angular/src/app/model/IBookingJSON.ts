export interface IBookingJSON {
  booking_id?: number;
  event_id: number;
  user: any;
  quantity: number;
  promotional_code: string;
  date_created?: string;
}
