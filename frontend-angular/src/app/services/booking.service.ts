import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable, Subject} from 'rxjs';
import {tap} from 'rxjs/operators';

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

  postBooking(data: any): Observable<any> {
    const url = this._bookingApi + 'create/';
    const body = JSON.stringify(data);
    return this._http.post(url, body, httpOptions).pipe(
      tap(() => console.log('[DEBUG]: Sending post data for Booking'))
    );
  }

  getAllBookings(): Observable<any> {
    const url = 'http://127.0.0.1:8000/api/bookings/';
    return this._http.get(url).pipe(
      tap(() => console.log('[DEBUG]: Tapped into async all booking fetching'))
    );
  }

  getBookings(event_id: number): Observable<any> {
    const url = 'http://127.0.0.1:8000/api/event/' + event_id + '/bookings/';
    return this._http.get(url).pipe(
      tap(() => console.log('[DEBUG]: Tapped into async booking fetching'))
    );
  }

  getUserBookings(pk: number): Observable<any> {
    const url = 'http://127.0.0.1:8000/api/user/' + pk + '/bookings/';
    return this._http.get(url).pipe(
      tap(() => console.log('[DEBUG]: Tapped into async booking fetching for user ' + pk))
    );
  }

  putBookings(id: number, data: any): Observable<any> {
    const url = this._bookingApi + id + '/delete/';
    const body = JSON.stringify(data);
    return this._http.put(url, body, httpOptions).pipe(
      tap(() => console.log('[DEBUG]: Tapped into put booking'))
    );
  }

  deleteBooking(booking_id: number): Observable<any> {
    const url = this._bookingApi + booking_id + '/delete/';
    return this._http.delete(url).pipe(
      tap(() => console.log('[DEBUG]: Deleting booking'))
    );
  }

}
