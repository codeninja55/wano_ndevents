import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-ndev-navbar',
  templateUrl: './ndev-navbar.component.html',
  styleUrls: ['./ndev-navbar.component.css']
})
/*export class NdevNavbarComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}*/
export class NdevNavbarComponent implements OnInit {
  @Output() navToggle = new EventEmitter<boolean>();

  constructor() { }

  ngOnInit() { }

  toggleSidenav() {
    this.navToggle.emit(true);
  }
}
