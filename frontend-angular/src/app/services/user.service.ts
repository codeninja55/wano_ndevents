import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs/internal/Observable';
import {tap} from 'rxjs/operators';
import {User} from '../model/user';
import {AuthService} from './auth.service';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class UserService {
  current_user: User = null;

  constructor(private _http: HttpClient,
              private _authService: AuthService) { }

  setUser(pk: number): boolean {
    this.getUser(pk).subscribe(data => {
      this.current_user = JSON.parse(JSON.stringify(data), User.reviver);
    }, (err) => console.error(err),
      () => {
        if (this.current_user.is_staff) {
          this._authService.isAdmin = true;
          return true;
        }
    });
    return false;
  }

  removeUser(): void {
    this.current_user = null;
  }

  register(data: any): Observable<any> {
    const url = 'http://127.0.0.1:8000/api/auth/register/';
    return this._http.post(url, data, httpOptions);
  }

  getUser(pk: number): Observable<any> {
    const url = 'http://127.0.0.1:8000/api/user/' + pk + '/';
    return this._http.get(url, httpOptions);
  }
}
