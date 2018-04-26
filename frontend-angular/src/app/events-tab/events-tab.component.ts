import {Component, OnInit} from '@angular/core';
import {EventService} from '../event.service';

@Component({
  selector: 'app-events-tab',
  templateUrl: './events-tab.component.html',
  styleUrls: ['./events-tab.component.css']
})
export class EventsTabComponent implements OnInit {
  events: Event[];

  constructor( private _eventService: EventService) { }

  ngOnInit() { this.getEvents(); }

  getEvents(): void {
    this._eventService.getEvents().subscribe(
      data => { this.events = data; },
      err => console.error(err),
      () => console.log(this.events)
    );
  }

}
