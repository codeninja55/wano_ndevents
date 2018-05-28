import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot} from '@angular/router';
import {AuthService} from './auth.service';

@Injectable({
  providedIn: 'root'
})
@Injectable()
export class AuthGuard implements CanActivate {

  constructor(private _authService: AuthService,
              private _router: Router) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    const url: string = state.url;

    return this.checkLogin(url);
  }

  canActivateChild(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    return this.canActivate(route, state);
  }

  checkLogin(url: string): boolean {
    this._authService.checkLogin();
    if (this._authService.isLoggedIn) { return true; }

    // Store the attempted URL for redirecting
    this._authService.redirectUrl = url;

    // Navigate to the login page with extras
    this._router.navigate(['/home']);
    return false;
  }
}
