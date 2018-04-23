import {Component, OnInit} from '@angular/core';
import * as moment from 'moment';
import {EventService} from '../event.service';
import {Event} from '../Event';
import {timeOpt} from '../timeOptions';

@Component({
  selector: 'app-event-form',
  templateUrl: './event-form.component.html',
  styleUrls: ['./event-form.component.css']
})
export class EventFormComponent implements OnInit {
  public date_now;
  public timeOpt = timeOpt;

  model = <IPostEventJSON>{};
  submitted = false;

  constructor(private _eventService: EventService) { }

  ngOnInit() { }

  onSubmit() {
    this.submitted = true;

    // TODO: Figure out these defaults
    this.model.launch_date = null;
    this.model.is_launched = false;
    this.model.organisers_name = 1;
    // Add the time to the date as when received, the date is set to 0. Using MomentJS chained adding feature
    // https://momentjs.com/docs/#/manipulating/add/
    this.model.date_start = moment(this.model.date_start).add(this.model.time_start.split(':')[0], 'h')
      .add(this.model.time_start.split(':')[1], 'm').format('YYYY-MM-DD HH:MM');
    this.model.date_end = moment(this.model.date_end).add(this.model.time_end.split(':')[0], 'h')
      .add(this.model.time_end.split(':')[1], 'm').format('YYYY-MM-DD HH:MM');
    // Create a CEvent model and turn it into JSON using static toJSON method
    const newEventJSON = Event.toJSON(new Event(this.model));
    console.log(newEventJSON);
    this._eventService.postEvent(newEventJSON).subscribe(() =>
      console.log(newEventJSON));
  }

  // TODO: Remove diagnostic when done
  // get diagnostic() { return JSON.stringify(this.model); }
}
