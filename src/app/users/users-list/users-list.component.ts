import { UserDialogComponent } from './../user-dialog/user-dialog.component';
import { UserService } from '../../service/user.service';

import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { UserDetailComponent } from '../user-detail/user-detail.component';
import * as moment from 'moment';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css']
})
export class UsersListComponent implements OnInit {
  searchText;
  user = {} as User;
  users = [];
  constructor(
    private userService: UserService,
    private dialog: MatDialog,
    private toastr: ToastrService
  ) { }

  ngOnInit(): void {
    this.getAllUsers();
    console.log(this.users);
  }
  getAllUsers() {
    this.userService.getAllUser().subscribe((res) => {
      this.users = res;
    })
  }
  deleteUser(id) {
    if (confirm('Bạn có chắc chắn xóa')) {
      this.userService.deleteUser(id).subscribe((res) => {
        if (res) {
          this.toastr.success(res['message']);
          this.getAllUsers()
        }
      })
    }
  }
  viewUserDetail(user) {
    const dialogRef = this.dialog.open(UserDetailComponent, {
      width: '1000px',
      data: {
        user_name: user.user_name, email: user.email, address: user.address,
         phone: user.phone, birth: user.birth, user_password: user.user_password,
          id_course: user.id_course, id_team: user.id_team, name_team: user.name_team,
           name_course: user.name_course
      }
    })
  }
  addNewUser() {
    const dialogRef = this.dialog.open(UserDialogComponent, {
      data: {
       id: this.user.id, user_name: this.user.user_name, email: this.user.email, address: this.user.address, phone: this.user.phone, birth: this.user.birth, user_password: this.user.user_password, id_course: this.user.id_course, id_team: this.user.id_team
      }
    });
    dialogRef.afterClosed().subscribe((user) => {
      if (user) {
        this.userService.addUser(user).subscribe((res) => {
          if (res) {
           this.toastr.success(res['message']);
            this.getAllUsers();
          }
        })
      }
    })

  }
  updateUser(user) {
    console.log(user)
    let obj = {
      user_name: user.user_name, email: user.email, address: user.address, phone: user.phone, birth: moment(user.birth).format('YYYY-MM-DD'), user_password: user.user_password, id_course: user.id_course, id_team: user.id_team
    }
    console.log(obj)
    const dialogRef = this.dialog.open(UserDialogComponent, {
      data: obj
    });
    dialogRef.afterClosed().subscribe((res) => {
      console.log(res);
      if (res) {
        this.userService.updateUser(res, user.id).subscribe((res) => {
          console.log(res)
          if (res) {
            this.toastr.success(res['message']);
            this.getAllUsers();
          }
        })
      }

    })
  }

}
export interface User {
  id: number;
  user_name: string;
  email: string;
  address: string;
  phone: string;
  birth: string;
  user_password: string;
  id_team: number;
  id_course: number;
  name_team: string;
  name_course: string;
}
