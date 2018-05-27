import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppComponent} from './app.component';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
// Custom Project Components
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {AppRoutingModule} from './app-routing.module';
import {DisplayCompService} from './services/display-comp.service';
import {AdminModule} from './admin/admin.module';
import {PageNotFoundComponent} from './not-found/not-found.component';
import {MatDialogModule} from '@angular/material';
import {HomeModule} from './home/home.module';
import {EventBookingDialogComponent} from './home/event-booking-dialog/event-booking-dialog.component';
import {MaterialModule} from './material.module';
import {FlexLayoutModule} from '@angular/flex-layout';
import {BookingEditDialogComponent} from './home/booking-edit-dialog/booking-edit-dialog.component';
import {TokenInterceptor} from './services/token.interceptor';

@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent,
  ],
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MaterialModule,
    HomeModule,
    AdminModule,
    AppRoutingModule,
    MatDialogModule,
    FlexLayoutModule,
  ],
  exports: [MatDialogModule, MaterialModule, ],
  providers: [ DisplayCompService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptor,
      multi: true
    }],
  entryComponents: [ EventBookingDialogComponent, BookingEditDialogComponent ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
