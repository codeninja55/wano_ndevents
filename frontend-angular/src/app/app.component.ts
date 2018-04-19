import { Component } from '@angular/core';
import { EventService } from './event.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public events;

  constructor(private _eventService: EventService) { }

  ngOnInit() {
    this.getEvents();
  }

  getEvents() {
    this._eventService.getEvents().subscribe(
      data => { this.events = data },
      err => console.error(err),
      () => console.log('[DEBUG]: Completed loading events')
    );
  }
}
