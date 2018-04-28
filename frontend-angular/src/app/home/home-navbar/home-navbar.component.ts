import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {DisplayCompService} from '../../display-comp.service';

@Component({
  selector: 'app-home-navbar',
  templateUrl: './home-navbar.component.html',
  styleUrls: ['./home-navbar.component.css']
})
export class HomeNavbarComponent implements OnInit {
  @Output() navToggle = new EventEmitter<boolean>();

  constructor(private _displayService: DisplayCompService) { }

  ngOnInit() { }

  toggleSidenav() { this.navToggle.emit(true); }
  closeBookingsSidenav() { this._displayService.toggleBookingsTab(false); }
  showEventsTab() { this._displayService.toggleEventsTab(true); }

}
