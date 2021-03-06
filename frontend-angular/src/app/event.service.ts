import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable , of} from 'rxjs';
import {catchError, tap} from 'rxjs/operators';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class EventService {
  private _eventApi = 'http://127.0.0.1:8000/api/event/';

  constructor(private _http: HttpClient) {}

  // Uses http.get() to load data from a single API endpoint
  getEvents(): Observable<any> {
    /* .pipe() used to tap into the Observable to log messages */
    return this._http.get(this._eventApi).pipe(
      tap(() => console.log('[DEBUG]: Tapped into async event fetching')),
      catchError(this.handleError('getEvents', []))
    );
  }

  // Uses http.get() to retrieve one hero from a single API endpoint
  getEvent(id: number): Observable<any> {
    const url = this._eventApi + id + '/';
    return this._http.get(url).pipe(
      tap((event) => console.log('[DEBUG]: ' + event.toString())),
      catchError(this.handleError('getEvent', []))
    );
  }

  // Uses http.post method to send JSON to the the create API endpoint to make a new event
  postEvent(data): Observable<any> {
    const url = this._eventApi + 'create/';
    const body = JSON.stringify(data);
    return this._http.post(url, body, httpOptions).pipe(
        tap((newEvent) => console.log('[DEBUG]: ' + newEvent)),
        catchError(this.handleError('postEvent'))
      );
  }

  // Uses http.put method to send JSON to the update API endpoint to update details of event
  putEvent(id: number, data: any) {
    const body = JSON.stringify(data);
    const url = this._eventApi + id + '/update/';
    return this._http.put(url, body, httpOptions).pipe(
      tap((event) => console.log('[DEBUG]: ' + event)),
      catchError(this.handleError('putEvent'))
    );
  }

  // Uses http.delete method to delete an Event from the API endpoint
  deleteEvent(id: number) {
    return this._http.delete(this._eventApi + id + '/delete/').pipe(
      tap(() => console.log('[DEBUG]: Deleted Event' + id)),
      catchError(this.handleError('deleteEvent'))
    );
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
