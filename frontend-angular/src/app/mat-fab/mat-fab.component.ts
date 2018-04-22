import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-mat-fab',
  templateUrl: './mat-fab.component.html',
  styleUrls: ['./mat-fab.component.css']
})
export class MatFabComponent implements OnInit {
  @Output() navToggle = new EventEmitter<boolean>();
  @Output() bookingsToggle = new EventEmitter<boolean>();

  constructor() { }

  ngOnInit() {
    this.closeSidenav();
    this.closeBookingsSidenav();
  }

  closeSidenav() {
    this.navToggle.emit(true);
  }
  closeBookingsSidenav() {
    this.bookingsToggle.emit(true);
  }

}
