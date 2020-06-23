import { __decorate } from "tslib";
import { UsersListComponent } from './users/users-list/users-list.component';
import { DashboardComponent } from './dashboard/dashboard/dashboard.component';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ProgramListComponent } from './program/program-list/program-list.component';
const routes = [
    {
        path: 'user-management', component: UsersListComponent
    },
    {
        path: 'dashboard', component: DashboardComponent
    },
    {
        path: 'program-list',
        component: ProgramListComponent
    }
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = __decorate([
    NgModule({
        imports: [RouterModule.forRoot(routes)],
        exports: [RouterModule]
    })
], AppRoutingModule);
export { AppRoutingModule };
//# sourceMappingURL=app-routing.module.js.map