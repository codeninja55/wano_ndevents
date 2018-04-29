import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import {tap} from 'rxjs/operators';
import {Subject} from 'rxjs/Subject';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class BookingService {
  private _bookingApi = 'http://127.0.0.1:8000/api/booking/';

  constructor(private _http: HttpClient) { }

  // Observable string sources
  private _eventSource = new Subject<number>();
  // Observable string streams
  eventAnnounced$ = this._eventSource.asObservable();
  // Service commands
  sendEventID(event_id: number) {
    this._eventSource.next(event_id);
  }

  postBooking(data): Observable<any> {
    const url = this._bookingApi + 'create/';
    const body = JSON.stringify(data);
    return this._http.post(url, body, httpOptions).pipe(
      tap(() => console.log('[DEBUG]: Sending post data for Booking'))
    );
  }

  getBookings(event_id: number): Observable<any> {
    const url = 'http://127.0.0.1:8000/api/event/' + event_id + '/bookings/';
    return this._http.get(url).pipe(
      tap(() => console.log('[DEBUG]: Tapped into async booking fetching'))
    );
  }

  deleteBooking(event_id: number): Observable<any> {
    const url = this._bookingApi + event_id + '/delete/';
    return this._http.delete(url).pipe(
      tap(() => console.log('[DEBUG]: Deleting booking'))
    );
  }

}
