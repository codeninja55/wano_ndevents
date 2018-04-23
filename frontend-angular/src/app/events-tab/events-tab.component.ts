import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {EventService} from '../event.service';

@Component({
  selector: 'app-events-tab',
  templateUrl: './events-tab.component.html',
  styleUrls: ['./events-tab.component.css']
})
export class EventsTabComponent implements OnInit {
  @Output() navToggle = new EventEmitter<boolean>();
  @Output() bookingsToggle = new EventEmitter<boolean>();
  events: Event[];
  // public events;

  constructor( private _eventService: EventService ) { }

  ngOnInit() { this.getEvents(); }

  toggleSidenav(): void { this.navToggle.emit(true); }

  openBookings(): void { this.bookingsToggle.emit(true); }

  getEvents(): void {
    this._eventService.getEvents().subscribe(
      data => { this.events = data; },
      err => console.error(err),
      () => console.log('[DEBUG]: Completed loading events')
    );
  }

}
