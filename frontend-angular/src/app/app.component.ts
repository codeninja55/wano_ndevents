import {Component, OnInit} from '@angular/core';
import {DisplayCompService} from './display-comp.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [DisplayCompService]
})
export class AppComponent implements OnInit {

  constructor() { }

  ngOnInit() { }
}
