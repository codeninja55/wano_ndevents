import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {EventDetailComponent} from './event-detail/event-detail.component';
import {EventFormComponent} from './event-form/event-form.component';
import {AdminComponent} from './admin.component';
import {AdminDashboardComponent} from './admin-dashboard/admin-dashboard.component';
import {AuthGuard} from '../services/auth-guard.service';

const adminRoutes: Routes = [
  {
    path: 'admin',
    component: AdminComponent,
    canActivate: [AuthGuard],
    children: [
      {
        path: '',
        component: AdminDashboardComponent,
      },
      {
        path: 'event/:id',
        component: EventDetailComponent,
        // outlet: 'event-detail'
      },
      {
        path: 'new',
        children: [
          { path: '', pathMatch: 'full', redirectTo: 'event'},
          { path: 'event', component: EventFormComponent}
        ]
      }
    ]
  },
];

@NgModule({
  imports: [
    RouterModule.forChild(adminRoutes),
  ],
  exports: [
    RouterModule,
  ]
})
export class AdminRoutingModule { }
