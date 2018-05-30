import {Component, OnInit, ViewChild} from '@angular/core';
import * as moment from 'moment';
import {EventService} from '../../services/event.service';
import {Event} from '../../model/event';
import {DisplayCompService} from '../../services/display-comp.service';
import {IEventJSON} from '../../model/iEventJSON';
import {Router} from '@angular/router';
import {NgForm} from '@angular/forms';
import {IUserJSON} from '../../model/IUserJSON';
import {UserService} from '../../services/user.service';

@Component({
  selector: 'app-event-form',
  templateUrl: './event-form.component.html',
  styleUrls: ['./event-form.component.css']
})
export class EventFormComponent implements OnInit {
  model = <IEventJSON>{};
  user = <IUserJSON>{};
  @ViewChild('eventForm') public form: NgForm;
  submitted = false;

  constructor(private _eventService: EventService,
              private _displayService: DisplayCompService,
              private _router: Router) { }

  ngOnInit() {
    // this._displayService.emitChange(false);
    this._displayService.toggleMatFabDisplay(false);
    this.user = UserService.getCurrentUser();
  }

  onSubmit() {
    this.submitted = true;
    // TODO: Figure out these defaults
    this.model.launch_date = (this.model.is_launched) ? moment().format() : null;
    this.model.is_launched = (this.form.controls['is_launched'].value !== null);

    this.model.organisers_name = {
      'username': this.user.username,
      'email': this.user.email,
    };
    // Add the time to the date as when received, the date is set to 0. Using MomentJS chained adding feature
    // https://momentjs.com/docs/#/manipulating/add/
    this.model.date_start = moment(this.model.date_start).add(this.model.time_start.split(':')[0], 'h')
      .add(this.model.time_start.split(':')[1], 'm').format('YYYY-MM-DD HH:MM');
    this.model.date_end = moment(this.model.date_end).add(this.model.time_end.split(':')[0], 'h')
      .add(this.model.time_end.split(':')[1], 'm').format('YYYY-MM-DD HH:MM');
    // Create a CEvent model and turn it into JSON using static toJSON method
    const newEventJSON = Event.toJSON(new Event(this.model));
    // console.log(newEventJSON);

    this._eventService.postEvent(newEventJSON).subscribe(() =>
      console.log(newEventJSON));

    this._eventService.getEvents();

    // Navigate back to empty admin page.
    this._router.navigate(['/admin']);
  }

  /*submitLaunch() {
    this.model.is_launched = true;
    this.onSubmit();
  }*/

  onCancel(): void {
    this.form.reset();
    this._router.navigate(['/admin']);
  }
}
