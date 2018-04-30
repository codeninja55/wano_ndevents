import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppComponent} from './app.component';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
// Custom Project Components
import {HttpClientModule} from '@angular/common/http';
import {AppRoutingModule} from './app-routing.module';
import {DisplayCompService} from './display-comp.service';
import {AdminModule} from './admin/admin.module';
import {PageNotFoundComponent} from './not-found/not-found.component';
import {MatDialogModule} from '@angular/material';
import {HomeModule} from './home/home.module';
import {EventBookingDialogComponent} from './home/event-booking-dialog/event-booking-dialog.component';
import {MaterialModule} from './material.module';
import {FlexLayoutModule} from '@angular/flex-layout';
import {BookingEditDialogComponent} from './home/booking-edit-dialog/booking-edit-dialog.component';

@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent,
  ],
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule,
    HttpClientModule,
    MaterialModule,
    HomeModule,
    AdminModule,
    AppRoutingModule,
    MatDialogModule,
    FlexLayoutModule,
  ],
  exports: [MatDialogModule, MaterialModule, ],
  providers: [ DisplayCompService, ],
  entryComponents: [ EventBookingDialogComponent, BookingEditDialogComponent ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
