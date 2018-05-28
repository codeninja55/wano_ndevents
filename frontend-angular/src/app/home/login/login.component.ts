import {Component, ViewChild} from '@angular/core';
import {NgForm} from '@angular/forms';
import {AuthService} from '../../services/auth.service';
import {Router} from '@angular/router';
import {UserService} from '../../services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  data = {username: 'codeninja', password: 'csit214@', email: 'andrew@neuraldev.io'};
  @ViewChild('loginForm') public form: NgForm;
  submitted = false;

  constructor(private _router: Router,
              private _userService: UserService,
              public authService: AuthService) { }

  login() {
    this.submitted = true;
    if (localStorage.getItem('user') === null) {
      this.authService.login(this.data).subscribe(data => {
          if (data) {
            this.authService.isLoggedIn = true;
            this.authService.setToken(data['token']);
            this._userService.setUser(data['user']['pk']);
          }
        }, err => console.log(err),
        () => console.log('[DEBUG]: User Logged In'));
    } else {
      this.authService.isLoggedIn = true;
    }
  }

  // TODO: Remove diagnostic when done
  get diagnostic() { return JSON.stringify(this.data); }
}
