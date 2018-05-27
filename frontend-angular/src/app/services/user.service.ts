import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs/internal/Observable';
import {tap} from 'rxjs/operators';
import {User} from '../model/user';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class UserService {
  public user: User;

  constructor(private _http: HttpClient) { }

  setUser(pk: number) {
    this.getUser(pk).subscribe(data => {
      this.user = JSON.parse(JSON.stringify(data), User.reviver);
    });
  }

  register(data: Object): Observable<any> {
    const url = 'http://127.0.0.1:8000/auth/register';
    return this._http.post(url, data, httpOptions).pipe(
      tap(() => console.log('[DEBUG]: User registered'))
    );
  }

  getUser(pk: number): Observable<any> {
    const url = 'http://127.0.0.1:8000/api/user/' + pk + '/';
    return this._http.get(url, httpOptions);
  }
}
