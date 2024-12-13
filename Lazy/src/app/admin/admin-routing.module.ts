import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';

const routes: Routes = [
  {
    // Empty route/path
    path: '',
    component: AdminDashboardComponent
  }
];

// Required to control internal routing
// @NgModule directive madhe aapn lihila kela -> konta karta tr forChild(routes)

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
