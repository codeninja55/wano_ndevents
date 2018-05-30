import {Component, OnDestroy, OnInit} from '@angular/core';
import {Subscription} from 'rxjs';
import {DisplayCompService} from '../services/display-comp.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit, OnDestroy {
  subscription: Subscription;
  subscription2: Subscription;
  public openBookingsTab = false;
  public openEventsTab = true;

  constructor(public _displayService: DisplayCompService) { }

  ngOnInit() {
    this._displayService.toggleMatFabDisplay(true);

    this.subscription = this._displayService.bookingsTabChangeEmitted$.subscribe(
      (change) => this.openBookingsTab = change,
      // (err) => console.log(err)
    );
    this.subscription2 = this._displayService.eventsTabChangeEmitted$.subscribe(
      (change) => this.openEventsTab = change
    );
  }

  ngOnDestroy() {
    // prevent memory leak when component destroyed
    this.subscription.unsubscribe();
    this.subscription2.unsubscribe();
  }
}
