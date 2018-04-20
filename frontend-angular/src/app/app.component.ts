import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  constructor() { }

  ngOnInit() { }

  getBackgroundImage() {
    return {
      // 'background-image': 'url(\'../assets/img/AdobeStock_70724536.jpeg\')',
      'background-color': '#000',
    };
  }
}
