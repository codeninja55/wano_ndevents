import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MaterialModule} from '../material.module';
import {FormsModule} from '@angular/forms';
import {DisplayCompService} from '../display-comp.service';
import {HomeNavbarComponent} from './home-navbar/home-navbar.component';
import {HomeComponent} from './home.component';

@NgModule({
  declarations: [
    HomeComponent,
    HomeNavbarComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    MaterialModule,
  ],
  exports: [],
  providers: [ DisplayCompService, ]
})
export class HomeModule { }
