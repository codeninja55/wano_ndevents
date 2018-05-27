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
  data = {username: 'codeninja', password: 'LimaLewis1215@', email: 'andrew@neuraldev.io'};
  @ViewChild('loginForm') public form: NgForm;
  submitted = false;

  constructor(private _router: Router,
              private _userService: UserService,
              public authService: AuthService) { }

  login() {
    this.submitted = true;
    console.log('[DEBUG]: Login attempted');
    this.authService.login(this.data).subscribe(data => {
      if (data) {
        this.authService.isLoggedIn = true;
        AuthService.setToken(data['token']);
        this._userService.setUser(data['user']['pk']);
      }
    });
  }

  // TODO: Remove diagnostic when done
  get diagnostic() { return JSON.stringify(this.data); }
}
