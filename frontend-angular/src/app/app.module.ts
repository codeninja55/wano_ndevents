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
import { AppRoutingModule } from './app-routing.module';
import { EventFormComponent } from './event-form/event-form.component';
import {DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE} from '@angular/material';
import {MAT_MOMENT_DATE_FORMATS, MomentDateAdapter} from '@angular/material-moment-adapter';
import {BookingService} from './booking.service';

@NgModule({
  declarations: [
    AppComponent,
    NdevNavbarComponent,
    EventsTabComponent,
    MatFabComponent,
    EventDetailComponent,
    BookingsTabComponent,
    EventFormComponent
  ],
  imports: [
    BrowserModule,
    MaterialModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
  ],
  providers: [ EventService, BookingService,
    {provide: DateAdapter, useClass: MomentDateAdapter, deps: [MAT_DATE_LOCALE]},
    {provide: MAT_DATE_FORMATS, useValue: MAT_MOMENT_DATE_FORMATS},
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
