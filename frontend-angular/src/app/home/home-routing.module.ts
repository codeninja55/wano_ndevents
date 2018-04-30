import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from './home.component';
import {EventDashboardComponent} from './event-dashboard/event-dashboard.component';
import {HomeBookingDashComponent} from './home-booking-dash/home-booking-dash.component';

const homeRoutes: Routes = [
  {
    path: 'home',
    component: HomeComponent,
    children: [
      { path: '', component: EventDashboardComponent },
      { path: 'bookings', component: HomeBookingDashComponent },
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
