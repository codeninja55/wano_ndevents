import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from './home.component';
import {EventDashboardComponent} from './event-dashboard/event-dashboard.component';
import {HomeBookingDashComponent} from './home-booking-dash/home-booking-dash.component';
import {LoginComponent} from './login/login.component';
import {RegisterComponent} from './register/register.component';
import {UserProfileComponent} from './user-profile/user-profile.component';
import {AuthGuard} from '../services/auth-guard.service';

const homeRoutes: Routes = [
  {
    path: 'home',
    component: HomeComponent,
    children: [
      { path: '', component: EventDashboardComponent },
      { path: 'bookings', component: HomeBookingDashComponent, canActivate: [AuthGuard] },
      { path: 'user/profile', component: UserProfileComponent, canActivate: [AuthGuard] },
    ]
  },
];

@NgModule({
  imports: [
    RouterModule.forChild(homeRoutes),
  ],
  exports: [
    RouterModule,
  ]
})
export class HomeRoutingModule { }
