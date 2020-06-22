import { UsersListComponent } from './users/users-list/users-list.component';
import { DashboardComponent } from './dashboard/dashboard/dashboard.component';

import { FormsModule , ReactiveFormsModule} from '@angular/forms';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UsersRoutingModule } from './users/users-routing.module';
import { TeamRoutingModule } from './team/team-routing.module';
import { ProgramListComponent } from './program/program-list/program-list.component';

const routes: Routes = [

  {
    path: 'dashboard' , component : DashboardComponent
  },
  {
    path: 'program-list', 
    component:ProgramListComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    UsersRoutingModule,
    TeamRoutingModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
