import { DashboardComponent } from './dashboard/dashboard/dashboard.component';
import { UsersListComponent } from './users-list/users-list.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
    path: 'user-management', component : UsersListComponent
  },
  {
    path: 'course-management', component : UsersListComponent
  },
  {
    path: '', redirectTo : '/dashboard', pathMatch: 'full'
  },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
