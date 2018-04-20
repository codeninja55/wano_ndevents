import {Component, OnInit, Input} from '@angular/core';
import {EventService} from '../event.service';
import {Event} from '../event';

@Component({
  selector: 'app-event-detail',
  templateUrl: './event-detail.component.html',
  styleUrls: ['./event-detail.component.css']
})
export class EventDetailComponent implements OnInit {
  @Input eventTest: Event;
  public event;

  constructor(private _eventService: EventService) { }

  ngOnInit() {
    this.getEvent();
    this.convertTime();
  }

  getEvent() {
    this._eventService.getEvent(1).subscribe(
      data => { this.event = data; },
      err => console.error(err),
      () => console.log('[DEBUG]: Retrieved Event ID ' + this.event.event_id
        + ' from the API')
    );
  }

  convertTime() { }
}
