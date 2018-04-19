import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';

// All Angular Material Modules imported at once
import { MaterialModule } from './material-module';

// Custom Project Components
import {NdevNavbarComponent} from './ndev-navbar/ndev-navbar.component';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {EventService} from './event.service';

@NgModule({
  declarations: [
    AppComponent,
    NdevNavbarComponent
  ],
  imports: [
    BrowserModule,
    MaterialModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [ EventService ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
