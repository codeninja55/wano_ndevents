import {Component, OnInit} from '@angular/core';
import {DisplayCompService} from '../../services/display-comp.service';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.css']
})
export class AdminDashboardComponent implements OnInit {
  cards = [
    { title: 'Current Events', cols: 2, rows: 1 },
    { title: 'Latest Bookings', cols: 1, rows: 1 },
    { title: 'Activity', cols: 1, rows: 2 },
    { title: 'Latest Events', cols: 1, rows: 1 }
  ];

  constructor(private _displayService: DisplayCompService) { }

  ngOnInit() {
    this._displayService.toggleMatFabDisplay(true);
  }
}
