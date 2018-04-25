import {Component, OnInit} from '@angular/core';
import {DisplayCompService} from './display-comp.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [DisplayCompService]
})
export class AppComponent implements OnInit {
  public showFab = true;
  public openBookingsTab = false;
  public showEventsTab = true;

  constructor(private _displayService: DisplayCompService) {
    // Subscribe to changes emitted from the service
    _displayService.changeEmitted$.subscribe(
      change => this.showFab = change
    );
    _displayService.bookingsTabChangeEmitted$.subscribe(
      (change) => this.openBookingsTab = change
    );
    _displayService.eventsTabChangeEmitted$.subscribe(
      (change) => this.showEventsTab = change
    );
  }

  ngOnInit() {
    // On init of app, make sure the Fab is showing
    this._displayService.emitChange(true);
  }
}
