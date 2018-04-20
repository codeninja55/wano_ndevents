import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class EventService {

  constructor(private http: HttpClient) {}

  // Uses http.get() to load data from a single API endpoint
  getEvents() {
    return this.http.get('http://127.0.0.1:8000/api/event/');
  }

  // Uses http.get() to retrieve one hero from a single API endpoint
  getEvent(id: number) {
    return this.http.get('http://127.0.0.1:8000/api/event/' + id + '/');
  }
}
