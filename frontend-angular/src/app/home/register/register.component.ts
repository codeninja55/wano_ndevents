import { Component } from '@angular/core';
import {UserService} from '../../services/user.service';
import {User} from '../../model/user';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  public user: User;

  constructor(private _userService: UserService) { }

  onSubmit() {
    this._userService.register(this.user);
  }

}
