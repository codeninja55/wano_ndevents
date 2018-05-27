import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {JwtHelperService} from '@auth0/angular-jwt';
import {tap} from 'rxjs/operators';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  baseUrl = 'http://127.0.0.1:8000/api/';
  isLoggedIn = false;
  isAdmin = false;
  // Store the URL so we can redirect after logging in
  redirectUrl: string;

  constructor(private _http: HttpClient) { }

  public setToken(token: string): void {
    localStorage.setItem('token', token);
  }

  public getToken(): string {
    return localStorage.getItem('token');
  }

  isAuthenticated(): boolean {
    // Get the token
    const token = this.getToken();
    const jwt_helper = new JwtHelperService();
    // Return a boolean reflecting whether or not the token is expired
    return jwt_helper.isTokenExpired(token);
  }

  login(data: any) {
    const url = this.baseUrl + 'auth/login/';
    const body = JSON.stringify(data);
    return this._http.post(url, body, httpOptions);
  }

  logout(): void {
    const url = this.baseUrl + 'auth/logout';
    this.isLoggedIn = false;
    this.isAdmin = false;
    this._http.post(url, {}, httpOptions).subscribe(() => console.log('[DEBUG]: User Logged Out'));
    localStorage.removeItem('token');
  }
}
