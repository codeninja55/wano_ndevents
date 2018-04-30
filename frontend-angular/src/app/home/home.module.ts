import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {DisplayCompService} from '../display-comp.service';
import {HomeNavbarComponent} from './home-navbar/home-navbar.component';
import {HomeComponent} from './home.component';
import {HomeRoutingModule} from './home-routing.module';
import {EventDashboardComponent} from './event-dashboard/event-dashboard.component';
import {FlexLayoutModule} from '@angular/flex-layout';
import {EventBookingDialogComponent} from './event-booking-dialog/event-booking-dialog.component';
import {MaterialModule} from '../material.module';
import { HomeBookingDashComponent } from './home-booking-dash/home-booking-dash.component';
import { BookingEditDialogComponent } from './booking-edit-dialog/booking-edit-dialog.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    HomeRoutingModule,
    FlexLayoutModule,
    MaterialModule,
  ],
  declarations: [
    HomeComponent,
    HomeNavbarComponent,
    EventDashboardComponent,
    EventBookingDialogComponent,
    HomeBookingDashComponent,
    BookingEditDialogComponent,
  ],
  exports: [],
  providers: [ DisplayCompService, ]
})
export class HomeModule { }
