import { Component, OnInit } from '@angular/core';
import {EventService} from '../event.service';

@Component({
  selector: 'app-events-tab',
  templateUrl: './events-tab.component.html',
  styleUrls: ['./events-tab.component.css']
})
export class EventsTabComponent implements OnInit {
  public events;

  constructor(private _eventService: EventService) {
  }

  ngOnInit() {
    this.getEvents();
  }

  getEvents() {
    this._eventService.getEvents().subscribe(
      data => { this.events = data; },
      err => console.error(err),
      () => console.log('[DEBUG]: Completed loading events')
    );
  }

}
