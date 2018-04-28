import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from './home/home.component';
import {PageNotFoundComponent} from './not-found/not-found.component';

const appRoutes: Routes = [
  { path: 'admin', redirectTo: '/admin', pathMatch: 'full' },
  { path: 'home', component: HomeComponent},
  { path: '', redirectTo: '/home', pathMatch: 'full'},
  { path: '**', component: PageNotFoundComponent},
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes,
      { enableTracing: true}  // <-- For debugging purposes
      ),
  ],
  exports: [
    RouterModule,
  ]
})
export class AppRoutingModule { }
