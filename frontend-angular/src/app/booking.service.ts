import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import {tap} from 'rxjs/operators';
import {Subject} from 'rxjs/Subject';

@Injectable()
export class BookingService {
  private _bookingApi = 'http://127.0.0.1:8000/api/event/';
  private _event_id;

  constructor(private _http: HttpClient) { }

  // Observable string sources
  private _eventSource = new Subject<number>();
  // Observable string streams
  eventAnnounced$ = this._eventSource.asObservable();
  // Service commands
  sendEventID(event_id: number) {
    this._eventSource.next(event_id);
  }

  getBookings(event_id: number): Observable<any> {
    const url = this._bookingApi + event_id + '/bookings/';
    return this._http.get(url).pipe(
      tap(() => console.log('[DEBUG]: Tapped into async booking fetching'))
    );
  }

}
