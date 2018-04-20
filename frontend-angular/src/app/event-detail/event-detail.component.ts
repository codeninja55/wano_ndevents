import {Component, OnInit} from '@angular/core';
import {EventService} from '../event.service';

@Component({
  selector: 'app-event-detail',
  templateUrl: './event-detail.component.html',
  styleUrls: ['./event-detail.component.css']
})
export class EventDetailComponent implements OnInit {
  public event;

  constructor(private _eventService: EventService) { }

  ngOnInit() {
    this.getEvent();
  }

  getEvent() {
    this._eventService.getEvent(1).subscribe(
      data => { this.event = data; },
      err => console.error(err),
      () => console.log('[DEBUG]: Retrieved Event' + 1 + 'from API')
    );
  }
}
