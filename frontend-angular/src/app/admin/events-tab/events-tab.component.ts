import {Component, OnInit} from '@angular/core';
import {EventService} from '../../services/event.service';
import {Event} from '../../model/event';
import * as moment from 'moment';

@Component({
  selector: 'app-events-tab',
  templateUrl: './events-tab.component.html',
  styleUrls: ['./events-tab.component.css']
})
export class EventsTabComponent implements OnInit {
  events: Event[];
  current_events: Event[] = [];
  past_events: Event[] = [];

  constructor(private _eventService: EventService) { }

  ngOnInit() {
    this.getEvents();
  }

  getEvents(): void {
    this._eventService.getEvents().subscribe(data => {
      this.events = data;
    }, err => console.error(err),
      () => {
        for (const ev of this.events) {
          if (moment(ev.date_start).isSameOrAfter(moment())) {
            this.current_events.push(ev);
          } else {
            this.past_events.push(ev);
          }
        }
        console.log(this.current_events);
        console.log(this.past_events);
      });
  }
}
