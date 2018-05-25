import {Component, OnDestroy, OnInit} from '@angular/core';
import {Subscription} from 'rxjs';
import {DisplayCompService} from '../display-comp.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit, OnDestroy {
  subscription: Subscription;
  public showFab = true;
  public openBookingsTab = false;
  public openEventsTab = true;

  constructor(private _displayService: DisplayCompService) {
    // Subscribe to changes emitted from the service
    _displayService.changeEmitted$.subscribe(
      change => this.showFab = change
    );
    this.subscription = _displayService.bookingsTabChangeEmitted$.subscribe(
      (change) => this.openBookingsTab = change,
      // (err) => console.log(err)
    );
    _displayService.eventsTabChangeEmitted$.subscribe(
      (change) => this.openEventsTab = change
    );
  }


  ngOnInit() {
    // On init of app, make sure the Fab is showing
    this._displayService.emitChange(true);
  }

  ngOnDestroy() {
    // prevent memory leak when component destroyed
    this.subscription.unsubscribe();
  }
}
