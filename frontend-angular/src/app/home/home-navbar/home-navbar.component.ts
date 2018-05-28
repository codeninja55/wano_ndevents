import {Component, OnInit} from '@angular/core';
import {DisplayCompService} from '../../services/display-comp.service';
import {Router} from '@angular/router';
import {AuthService} from '../../services/auth.service';
import {MatDialog} from '@angular/material';
import {LoginComponent} from '../login/login.component';
import {RegisterComponent} from '../register/register.component';
import {UserService} from '../../services/user.service';

@Component({
  selector: 'app-home-navbar',
  templateUrl: './home-navbar.component.html',
  styleUrls: ['./home-navbar.component.css']
})
export class HomeNavbarComponent implements OnInit {
  constructor(private _router: Router,
              private _displayService: DisplayCompService,
              private _dialog: MatDialog,
              public userService: UserService,
              public authService: AuthService) { }

  ngOnInit(): void {
    this.authService.checkLogin();
  }

  goToAdmin(): void { this._router.navigate(['/admin']); }

  loginDialog() {
    const dialogRef = this._dialog.open(LoginComponent, {
      width: '40%',
    });
  }

  registerDialog() {
    const dialogRef = this._dialog.open(RegisterComponent, {
      width: '55%'
    });
  }

  logout() {
    this.userService.removeUser();
    this.authService.logout();
  }
}
