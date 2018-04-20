import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class EventService {
  private eventApi = 'http://localhost:8000/api/event/';

  constructor(private http: HttpClient) {}

  // Uses http.get() to load data from a single API endpoint
  getEvents(): Observable<Event> {
    return this.http.get<Event[]>(this.eventApi);
  }

  // Uses http.get() to retrieve one hero from a single API endpoint
  getEvent(id: number) {
    const url = '${this.eventApi}/${id}';
    return this.http.get(url);
  }
}
