import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {DisplayCompService} from '../../display-comp.service';

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
