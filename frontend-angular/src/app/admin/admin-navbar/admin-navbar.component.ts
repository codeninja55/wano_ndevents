import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {DisplayCompService} from '../../display-comp.service';

@Component({
  selector: 'app-admin-navbar',
  templateUrl: './admin-navbar.component.html',
  styleUrls: ['./admin-navbar.component.css']
})
export class AdminNavbarComponent implements OnInit {
  @Output() navToggle = new EventEmitter<boolean>();

  constructor(private _displayService: DisplayCompService) { }

  ngOnInit() { }

  toggleSidenav() { this.navToggle.emit(true); }
  // closeBookingsSidenav() { this._displayService.toggleBookingsTab(false); }
  showEventsTab() { this._displayService.toggleEventsTab(true); }
}
