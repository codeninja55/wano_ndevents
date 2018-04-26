interface IPostEventJSON {
  organisers_name: any;
  title: string;
  description: string;
  venue: string;
  capacity_max: number;
  capacity_expected: number;
  promotional_code: string;
  price: number;
  date_start: string;
  date_end: string;
  is_launched: boolean;
  launch_date?: string;
  time_start?: string;
  time_end?: string;
}
