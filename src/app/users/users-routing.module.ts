import { UsersListComponent } from './users-list/users-list.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const UserRoutes: Routes = [
  {
    path: 'user-management', component : UsersListComponent
  },
  {
    path: '', redirectTo: '/user-management', pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(UserRoutes)],
  exports: [RouterModule]
})
export class UsersRoutingModule {
}
