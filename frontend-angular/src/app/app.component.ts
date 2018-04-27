import {Component, OnDestroy, OnInit} from '@angular/core';
import {DisplayCompService} from './display-comp.service';
import {Subscription} from 'rxjs/Subscription';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [DisplayCompService]
})
export class AppComponent implements OnInit, OnDestroy {
  public showFab = true;
  public showEventsTab = true;

  constructor(private _displayService: DisplayCompService) {
    // Subscribe to changes emitted from the service
    _displayService.changeEmitted$.subscribe(
      change => this.showFab = change
    );
    _displayService.eventsTabChangeEmitted$.subscribe(
      (change) => this.showEventsTab = change
    );
  }

  ngOnInit() {
    // On init of app, make sure the Fab is showing
    this._displayService.emitChange(true);
  }

  ngOnDestroy() {
    // prevent memory leak when component destroyed
  }
}
