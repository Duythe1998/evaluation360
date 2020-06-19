import { UsersListComponent } from './users/users-list/users-list.component';
import { DashboardComponent } from './dashboard/dashboard/dashboard.component';

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UsersRoutingModule } from './users/users-routing.module';


const routes: Routes = [
 
  {
    path: 'dashboard' , component : DashboardComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    UsersRoutingModule
  
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
