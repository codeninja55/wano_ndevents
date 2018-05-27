export interface IUserJSON {
  username: string;
  email: string;
  id?: number;
  password?: string;
  password2?: string;
  first_name?: string;
  last_name?: string;
  is_staff?: boolean;
}
