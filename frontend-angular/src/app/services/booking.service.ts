import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable, Subject} from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class BookingService {
  private _bookingApi = 'http://localhost:8000/api/booking/';

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
    return this._http.post(url, body, httpOptions);
  }

  getAllBookings(): Observable<any> {
    const url = 'http://localhost:8000/api/bookings/';
    return this._http.get(url);
  }

  getBookings(event_id: number): Observable<any> {
    const url = 'http://localhost:8000/api/event/' + event_id + '/bookings/';
    return this._http.get(url);
  }

  getUserBookings(pk: number): Observable<any> {
    const url = 'http://localhost:8000/api/user/' + pk + '/bookings/';
    return this._http.get(url);
  }

  putBookings(id: number, data: any): Observable<any> {
    const url = this._bookingApi + id + '/update/';
    const body = JSON.stringify(data);
    return this._http.put(url, body, httpOptions);
  }

  deleteBooking(booking_id: number): Observable<any> {
    const url = this._bookingApi + booking_id + '/delete/';
    return this._http.delete(url);
  }

}
