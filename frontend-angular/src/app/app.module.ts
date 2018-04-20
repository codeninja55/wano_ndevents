import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';

// All Angular Material Modules imported at once
import { MaterialModule } from './material-module';

// Custom Project Components
import {NdevNavbarComponent} from './ndev-navbar/ndev-navbar.component';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {EventService} from './event.service';
import { EventsTabComponent } from './events-tab/events-tab.component';
import { MatFabComponent } from './mat-fab/mat-fab.component';
import { EventDetailComponent } from './event-detail/event-detail.component';
import { BookingsTabComponent } from './bookings-tab/bookings-tab.component';

@NgModule({
  declarations: [
    AppComponent,
    NdevNavbarComponent,
    EventsTabComponent,
    MatFabComponent,
    EventDetailComponent,
    BookingsTabComponent
  ],
  imports: [
    BrowserModule,
    MaterialModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [ EventService ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
