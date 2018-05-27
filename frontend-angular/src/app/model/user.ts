import {IUserJSON} from './IUserJSON';

export class User {
  username: string;
  email: string;
  id?: number;
  password1?: string;
  password2?: string;
  first_name?: string;
  last_name?: string;
  is_staff?: boolean;

  constructor(iUser: IUserJSON) {
    this.id = iUser.id;
    this.username = iUser.username;
    this.email = iUser.email;
    this.first_name = iUser.first_name;
    this.last_name = iUser.last_name;
    this.is_staff = iUser.is_staff;
  }

  /* reviver can be passed as the second parameter to JSON.parse to automatically call User.fromJSON on the resulting value. */
  static reviver(key: string, value: any): any {
    return key === '' ? User.fromJSON(value) : value;
  }

  /* fromJSON is used to convert a serialized version of the User to an instance of the class */
  static fromJSON(json: IUserJSON): User {
    const event = Object.create(User.prototype);
    return Object.assign(event, json, {});
  }
}
