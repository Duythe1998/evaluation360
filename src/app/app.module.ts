import { UsersModule } from './users/users.module';
import { MatNativeDateModule } from '@angular/material/core';
import { DashboardComponent } from './dashboard/dashboard/dashboard.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { FormsModule , ReactiveFormsModule} from '@angular/forms';
import { AppComponent } from './app.component';
import { SidebarComponent } from './dashboard/sidebar/sidebar.component';
import { NavbarComponent } from './dashboard/navbar/navbar.component';
import { FooterComponent } from './dashboard/footer/footer.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule ,  } from '@angular/material/input';
import {MatDatepickerModule } from '@angular/material/datepicker' ;
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { NgxPaginationModule} from 'ngx-pagination'
import { TeamModule } from './team/team.module';
import {ProgramListComponent} from './program/program-list/program-list.component';
import { ProgramItemComponent } from './program/program-item/program-item.component'

import {ProgramService} from './service/program.service'
import { from } from 'rxjs';
import { ProgramDetailComponent } from './program/program-detail/program-detail.component';
import { NotFoundComponent } from './not-found/not-found.component';


@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    SidebarComponent,
    NavbarComponent,
    FooterComponent,
    ProgramListComponent,
    ProgramItemComponent,
    ProgramDetailComponent,
    NotFoundComponent
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
    UsersModule,
    TeamModule,
    NgxPaginationModule
  ],
  entryComponents:[ProgramItemComponent],
  providers: [ProgramService],
  bootstrap: [AppComponent]
})
export class AppModule { }
