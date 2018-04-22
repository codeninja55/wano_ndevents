import {Component, OnInit} from '@angular/core';
import * as moment from 'moment';
import {EventService} from '../event.service';
import {CEvent} from '../cEvent';
import {timeOpt} from '../timeOptions';

@Component({
  selector: 'app-event-form',
  templateUrl: './event-form.component.html',
  styleUrls: ['./event-form.component.css']
})
export class EventFormComponent implements OnInit {
  public date_now;
  public timeOpt = timeOpt;

  // model = Object.create(CEvent.prototype);
  model = <IEventJSON>{};
  submitted = false;

  constructor(private _eventService: EventService) { }

  ngOnInit() {
    this.date_now = moment();
  }

  onSubmit() {
    this.submitted = true;
    // this.model.date_created = moment().format('YYYY-MM-DD');
    // this.model.last_updated = moment().format('YYYY-MM-DD');
    this.model.launch_date = null;
    this.model.is_launched = false;
    this.model.organisers_name = 1;
    const data = JSON.stringify(this.model);
    console.log(data);
    const newEvent = new CEvent(this.model);
    const newEventJSON = JSON.stringify(newEvent);
    const newEventParsed = JSON.parse(newEventJSON, CEvent.reviver);
    console.log(newEvent);
    console.log(newEventJSON);
    console.log(newEventParsed);
    this._eventService.postEvent(newEventJSON).subscribe(() =>
      console.log(newEventJSON));
  }

  // TODO: Remove diagnostic when done
  get diagnostic() { return JSON.stringify(this.model); }
}
