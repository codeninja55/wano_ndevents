import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {EventsTabComponent} from './events-tab/events-tab.component';
import {EventDetailComponent} from './event-detail/event-detail.component';

const routes: Routes = [
  { path: 'events', component: EventsTabComponent},
  { path: 'event/:id', component: EventDetailComponent},
  { path: '', redirectTo: '/', pathMatch: 'full'}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
  ],
  exports: [
    RouterModule,
  ]
})
export class AppRoutingModule { }
