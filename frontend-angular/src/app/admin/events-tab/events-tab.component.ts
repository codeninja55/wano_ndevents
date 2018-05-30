import {Component, OnInit} from '@angular/core';
import {EventService} from '../../services/event.service';
import {Observable} from 'rxjs/internal/Observable';

@Component({
  selector: 'app-events-tab',
  templateUrl: './events-tab.component.html',
  styleUrls: ['./events-tab.component.css']
})
export class EventsTabComponent implements OnInit {
  events$: Observable<any>;

  constructor( private _eventService: EventService) { }

  ngOnInit() { this.getEvents(); }

  getEvents(): void {
    this.events$ = this._eventService.getEvents();
  }

}
