import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {DisplayCompService} from '../../display-comp.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-home-navbar',
  templateUrl: './home-navbar.component.html',
  styleUrls: ['./home-navbar.component.css']
})
export class HomeNavbarComponent implements OnInit {
  @Output() navToggle = new EventEmitter<boolean>();

  constructor(private _router: Router,
              private _displayService: DisplayCompService) { }

  ngOnInit() { }

  toggleSidenav() { this.navToggle.emit(true); }
  showEventsTab() { this._displayService.toggleEventsTab(true); }
  goToAdmin(): void { this._router.navigate(['/admin']); }

}
