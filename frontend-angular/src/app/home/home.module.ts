import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {DisplayCompService} from '../services/display-comp.service';
import {HomeNavbarComponent} from './home-navbar/home-navbar.component';
import {HomeComponent} from './home.component';
import {HomeRoutingModule} from './home-routing.module';
import {EventDashboardComponent} from './event-dashboard/event-dashboard.component';
import {FlexLayoutModule} from '@angular/flex-layout';
import {EventBookingDialogComponent} from './event-booking-dialog/event-booking-dialog.component';
import {MaterialModule} from '../material.module';
import {HomeBookingDashComponent} from './home-booking-dash/home-booking-dash.component';
import {BookingEditDialogComponent} from './booking-edit-dialog/booking-edit-dialog.component';
import {LoginComponent} from './login/login.component';
import {RegisterComponent} from './register/register.component';
import {BrowserModule} from '@angular/platform-browser';
import {HTTP_INTERCEPTORS} from '@angular/common/http';
import {TokenInterceptor} from '../services/token.interceptor';
import { UserProfileComponent } from './user-profile/user-profile.component';
import {UserService} from '../services/user.service';

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
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
    LoginComponent,
    RegisterComponent,
    UserProfileComponent,
  ],
  exports: [],
  providers: [ DisplayCompService, UserService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptor,
      multi: true
    }],
  entryComponents: [LoginComponent, RegisterComponent]
})
export class HomeModule { }
