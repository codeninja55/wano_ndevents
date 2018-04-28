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
import {HomeModule} from './home/home.module';
import {PageNotFoundComponent} from './not-found/not-found.component';

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
    AdminModule,
    HomeModule,
    AppRoutingModule,
  ],
  exports: [],
  providers: [ DisplayCompService, ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
