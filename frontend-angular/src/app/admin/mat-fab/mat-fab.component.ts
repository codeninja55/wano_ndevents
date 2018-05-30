import {Component, OnInit} from '@angular/core';
import {DisplayCompService} from '../../services/display-comp.service';

@Component({
  selector: 'app-mat-fab',
  templateUrl: './mat-fab.component.html',
  styleUrls: ['./mat-fab.component.css']
})
export class MatFabComponent implements OnInit {

  constructor(private _displayService: DisplayCompService) { }

  ngOnInit() { }

  closeBookingsSidenav(): void {
    this._displayService.toggleBookingsTab(false);
  }
}
