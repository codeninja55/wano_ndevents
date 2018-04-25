import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {EventService} from '../event.service';

@Component({
  selector: 'app-events-tab',
  templateUrl: './events-tab.component.html',
  styleUrls: ['./events-tab.component.css']
})
export class EventsTabComponent implements OnInit {
  @Output() bookingsToggle = new EventEmitter<boolean>();
  events: Event[];

  constructor( private _eventService: EventService) { }

  ngOnInit() { this.getEvents(); }

  openBookings(): void { this.bookingsToggle.emit(true); }

  getEvents(): void {
    this._eventService.getEvents().subscribe(
      data => { this.events = data; },
      err => console.error(err),
      () => console.log('[DEBUG]: Completed loading events')
    );
  }

}
