import { __decorate } from "tslib";
import { MatNativeDateModule } from '@angular/material/core';
import { UsersListComponent } from './users/users-list/users-list.component';
import { DashboardComponent } from './dashboard/dashboard/dashboard.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { SidebarComponent } from './dashboard/sidebar/sidebar.component';
import { NavbarComponent } from './dashboard/navbar/navbar.component';
import { FooterComponent } from './dashboard/footer/footer.component';
import { UserDetailComponent } from './users/user-detail/user-detail.component';
import { UserDialogComponent } from './users/user-dialog/user-dialog.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule, } from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { ProgramListComponent } from './program/program-list/program-list.component';
let AppModule = class AppModule {
};
AppModule = __decorate([
    NgModule({
        declarations: [
            AppComponent,
            UsersListComponent,
            DashboardComponent,
            SidebarComponent,
            NavbarComponent,
            FooterComponent,
            UserDetailComponent,
            UserDialogComponent,
            ProgramListComponent,
        ],
        imports: [
            BrowserModule,
            AppRoutingModule,
            HttpClientModule,
            BrowserAnimationsModule,
            FormsModule,
            ReactiveFormsModule,
            MatDialogModule,
            MatButtonModule,
            MatFormFieldModule,
            MatInputModule,
            MatDatepickerModule,
            MatNativeDateModule,
            Ng2SearchPipeModule,
            RouterModule.forRoot([])
        ],
        providers: [],
        bootstrap: [AppComponent]
    })
], AppModule);
export { AppModule };
//# sourceMappingURL=app.module.js.map