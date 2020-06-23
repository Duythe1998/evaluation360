import { UserDialogComponent } from './../user-dialog/user-dialog.component';
import { UserService } from '../../service/user.service';

import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { UserDetailComponent } from '../user-detail/user-detail.component';
import * as moment from 'moment';

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
  ) { }

  ngOnInit(): void {
    this.getAllUsers();
    console.log(this.users);
  }
  getAllUsers() {
    this.userService.getAllUser().subscribe((res) => {
      console.log(res)
      this.users = res;
    })
  }
  deleteUser(id) {
    if (confirm('Bạn có chắc chắn xóa')) {
      this.userService.deleteUser(id).subscribe((res) => {
        if (res) {
          this.getAllUsers()
        }
      })
    }
  }
  viewUserDetail(user) {
    const dialogRef = this.dialog.open(UserDetailComponent, {
      width: '700px',
      data: {
        user_name: user.user_name, email: user.email, address: user.address, phone: user.phone, birth: user.birth, user_password: user.user_password, id_course: this.user.id_course, id_team: this.user.id_team
      }
    })
  }
  addNewUser() {
    const dialogRef = this.dialog.open(UserDialogComponent, {
      data: {
        user_name: this.user.user_name, email: this.user.email, address: this.user.address, phone: this.user.phone, birth: this.user.birth, user_password: this.user.user_password, id_course: this.user.id_course, id_team: this.user.id_team
      }
    });
    dialogRef.afterClosed().subscribe((res) => {
      if (res) {
        this.userService.addUser(res).subscribe((res) => {
          console.log(res)
          if (res) {
            alert('Thêm mới thành công');
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
      width: '500px',
      data: obj
    });
    dialogRef.afterClosed().subscribe((res) => {
      console.log(res);
      if (res) {
        this.userService.updateUser(res, user.id).subscribe((res) => {
          console.log(res)
          if (res) {
            alert('Sửa user thành công');
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
}
