import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {DisplayCompService} from '../display-comp.service';

@Component({
  selector: 'app-ndev-navbar',
  templateUrl: './ndev-navbar.component.html',
  styleUrls: ['./ndev-navbar.component.css']
})

export class NdevNavbarComponent implements OnInit {
  @Output() navToggle = new EventEmitter<boolean>();

  constructor(private _displayService: DisplayCompService) { }

  ngOnInit() { }

  toggleSidenav() { this.navToggle.emit(true); }
  closeBookingsSidenav() { this._displayService.toggleBookingsTab(false); }
  showEventsTab() { this._displayService.toggleEventsTab(true); }

}
