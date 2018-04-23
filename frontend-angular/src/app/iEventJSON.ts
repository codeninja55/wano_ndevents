interface IEventJSON {
  title: string;
  venue: string;
  capacity_max: number;
  capacity_expected: number;
  description: string;
  organisers_name: number;
  date_start: string;
  date_end: string;
  is_launched: boolean;
  event_id?: number;
  launch_date?: string;
  time_start?: string;
  time_end?: string;
  date_created?: string;
  last_updated?: string;
  url?: URL;
}
