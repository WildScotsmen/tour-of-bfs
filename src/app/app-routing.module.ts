import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BoyfsComponent } from './boyfs/boyfs.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { BoyfDetailComponent } from './boyf-detail/boyf-detail.component'

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent},
  { path: 'boyfriends', component: BoyfsComponent },
  { path: 'detail/:id', component: BoyfDetailComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
