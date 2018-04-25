import {Component, OnInit} from '@angular/core';
import {MatFabService} from './mat-fab.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [MatFabService]
})
export class AppComponent implements OnInit {
  public showFab = true;

  constructor(private _fabService: MatFabService) {
    // Subscribe to changes emitted from the service
    _fabService.changeEmitted$.subscribe(
      change => this.showFab = change
    );
  }

  ngOnInit() {
    // On init of app, make sure the Fab is showing
    this._fabService.emitChange(true);
  }
}
