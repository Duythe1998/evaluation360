import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatSelectModule} from '@angular/material/select'
import { UsersListComponent } from './users-list/users-list.component';
import { UserDialogComponent } from './user-dialog/user-dialog.component';
import { UserDetailComponent } from './user-detail/user-detail.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxMatSelectSearchModule } from 'ngx-mat-select-search';
import { UsersRoutingModule } from './users-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { JwPaginationModule } from 'jw-angular-pagination';
@NgModule({
  declarations: [
    UserDetailComponent,
    UserDialogComponent,
    UsersListComponent,
  ],
  imports: [
    CommonModule,
    UsersRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatDialogModule,
    MatButtonModule,
    MatFormFieldModule,
    MatSelectModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
    Ng2SearchPipeModule,
    NgxMatSelectSearchModule,
    JwPaginationModule,
    ToastrModule.forRoot({
      timeOut: 4000,
      positionClass: 'toast-top-right'
    
    })
  ],
  providers: [

  ]
})
export class UsersModule { }
