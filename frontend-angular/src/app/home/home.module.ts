import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MaterialModule} from '../material.module';
import {FormsModule} from '@angular/forms';
import {DisplayCompService} from '../display-comp.service';
import {HomeNavbarComponent} from './home-navbar/home-navbar.component';
import {HomeComponent} from './home.component';
import {HomeRoutingModule} from './home-routing.module';
import {EventDashboardComponent} from '../event-dashboard/event-dashboard.component';
import {FlexLayoutModule} from '@angular/flex-layout';

@NgModule({
  imports: [
    MaterialModule,
    CommonModule,
    FormsModule,
    HomeRoutingModule,
    FlexLayoutModule,
  ],
  declarations: [
    HomeComponent,
    HomeNavbarComponent,
    EventDashboardComponent,
  ],
  exports: [],
  providers: [ DisplayCompService, ]
})
export class HomeModule { }
