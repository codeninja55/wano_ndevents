import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import {catchError, tap} from 'rxjs/operators';
import {of} from 'rxjs/observable/of';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class EventService {
  private _eventApi = 'http://127.0.0.1:8000/api/event/';

  constructor(private _http: HttpClient) {}

  // Uses http.get() to load data from a single API endpoint
  getEvents() {
    /* .pipe() used to tap into the Observable to log messages */
    return this._http.get(this._eventApi).pipe(
      tap(() => console.log('[DEBUG]: Tapped into async fetching')),
      catchError(this.handleError('getEvents', []))
    );
  }

  // Uses http.get() to retrieve one hero from a single API endpoint
  getEvent(id: number) {
    const url = this._eventApi + id + '/';
    return this._http.get(url).pipe(
      tap((event) => console.log(event)),
      catchError(this.handleError('getEvent', []))
    );
  }
  }

  /**
   * Handle Http operation that failed.
   * Let the app continue.
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      console.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
}
