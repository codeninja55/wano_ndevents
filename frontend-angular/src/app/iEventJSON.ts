interface IEventJSON {
  event_id?: number;
  organisers_name: any;
  title: string;
  description: string;
  venue: string;
  capacity_max: number;
  capacity_expected: number;
  bookings_available?: number;
  bookings_made?: number;
  promotional_code: string;
  price: number;
  event_bookings?: any;
  date_start: string;
  date_end: string;
  is_launched: boolean;
  launch_date?: string;
  time_start?: string;
  time_end?: string;
  date_created?: string;
  last_updated?: string;
  url?: URL;
}
