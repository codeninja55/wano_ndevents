import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {EventDetailComponent} from './event-detail/event-detail.component';
import {EventFormComponent} from './event-form/event-form.component';

const routes: Routes = [
  { path: '', redirectTo: '/', pathMatch: 'full'},
  {
    path: 'event/:id',
    component: EventDetailComponent,
  },
  {
    path: 'new',
    children: [
      { path: '', pathMatch: 'full', redirectTo: 'event'},
      { path: 'event', component: EventFormComponent},
    ]
  }
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
