export interface IBookingJSON {
  booking_id?: number;
  event: any;
  user: any;
  quantity: number;
  promotional_code: string;
  payment?: number;
  date_created?: string;
}
