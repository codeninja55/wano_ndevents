import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs/internal/Observable';
import {tap} from 'rxjs/operators';
import {User} from '../model/user';
import {AuthService} from './auth.service';
import {IUserJSON} from '../model/IUserJSON';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class UserService {
  current_user: User;

  constructor(private _http: HttpClient,
              private _authService: AuthService) { }

  setUser(pk: number): boolean {
    // TODO: Find a better way of doing this
    // this.getUser(pk).subscribe(data => {
    //   this.current_user = JSON.parse(JSON.stringify(data), User.reviver);
    // }, (err) => console.error(err),
    //   () => {
    //     if (this.current_user.is_staff) {
    //       this._authService.isAdmin = true;
    //       return true;
    //     }
    // });
    // return false;

    // TODO: Add user to localStorage for testing
    this.getUser(pk).subscribe(data => {
      localStorage.setItem('user', JSON.stringify(data));
    }, (err) => { console.error(err); },
      () => {
        this._authService.isAdmin = (this.current_user.is_staff);
        return true;
      });
    return false;
  }

  removeUser(): void {
    this.current_user = null;
    localStorage.removeItem('user');
  }

  register(data: any): Observable<any> {
    const url = 'http://127.0.0.1:8000/api/auth/register/';
    return this._http.post(url, data, httpOptions);
  }

  static getCurrentUser(): User {
    return new User(JSON.parse(localStorage.getItem('user')));
  }

  getUser(pk: number): Observable<any> {
    const url = 'http://127.0.0.1:8000/api/user/' + pk + '/';
    return this._http.get<IUserJSON>(url, httpOptions).pipe(
      tap(data => {
        this.current_user = JSON.parse(JSON.stringify(data), User.reviver);
        localStorage.setItem('user', JSON.stringify(data));
      })
    );
  }

  putUser(pk: number, data: any): Observable<any> {
    const url = 'http://127.0.0.1:8000/api/user/' + pk + '/update/';
    const body = JSON.parse(JSON.stringify(data), User.reviver);
    return this._http.put(url, body, httpOptions);
  }

  changePassword(data: any): Observable<any> {
    const url = 'http://127.0.0.1:8000/api/auth/password/change/';
    return this._http.post(url, data, httpOptions);
  }
}
