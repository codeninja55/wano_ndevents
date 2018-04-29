import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
// All Angular Material Modules imported at once
import {MaterialModule} from '../material.module';
// Custom Project Components
import {FormsModule} from '@angular/forms';
import {DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE} from '@angular/material';
import {MAT_MOMENT_DATE_FORMATS, MomentDateAdapter} from '@angular/material-moment-adapter';
// Custom Dependency Injection Services
import {EventService} from '../event.service';
import {BookingService} from '../booking.service';
import {DisplayCompService} from '../display-comp.service';
// Custom Components
import {EventsTabComponent} from './events-tab/events-tab.component';
import {EventDetailComponent} from './event-detail/event-detail.component';
import {BookingsTabComponent} from './bookings-tab/bookings-tab.component';
import {EventFormComponent} from './event-form/event-form.component';
import {AdminComponent} from './admin.component';
import {AdminNavbarComponent} from './admin-navbar/admin-navbar.component';
// Routing Module
import {AdminRoutingModule} from './admin-routing.module';
import {MatFabComponent} from './mat-fab/mat-fab.component';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    FormsModule,
    AdminRoutingModule,
  ],
  declarations: [
    AdminComponent,
    AdminNavbarComponent,
    MatFabComponent,
    EventsTabComponent,
    EventDetailComponent,
    EventFormComponent,
    BookingsTabComponent,
  ],
  providers: [ EventService, BookingService, DisplayCompService,
    {provide: DateAdapter, useClass: MomentDateAdapter, deps: [MAT_DATE_LOCALE]},
    {provide: MAT_DATE_FORMATS, useValue: MAT_MOMENT_DATE_FORMATS},
  ],
  exports: [AdminComponent, ]
})
export class AdminModule { }
