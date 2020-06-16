import { UserDialogComponent } from './../user-dialog/user-dialog.component';
import { UserService } from './../../user.service';

import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { UserDetailComponent } from '../user-detail/user-detail.component';
import * as moment from 'moment'

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css']
})
export class UsersListComponent implements OnInit {
  user = {} as User;
  users: any;
  constructor(
    private userService: UserService,
    private dialog: MatDialog
  ) { }

  ngOnInit(): void {
    this.getAllUsers();
    console.log(this.users);
  }
  getAllUsers() {
    this.userService.getAllUser().subscribe((res) => {
      console.log(res)
      this.users = res[0];
    })
  }
  deleteUser(id) {
    this.userService.deleteUser(id).subscribe((res) => {
      if (res) {
        this.getAllUsers()
      }
    })
  }
  viewUserDetail() {
    const dialogRef = this.dialog.open(UserDetailComponent, {
      height: '350px',
      width: '700px'
    })

  }
  addNewUser() {
    const dialogRef = this.dialog.open(UserDialogComponent, {
      width: '500px',
      data: {
        user_name: this.user.user_name, email: this.user.email, address: this.user.address, phone: this.user.phone, birth: this.user.birth, avatar: this.user.avatar, user_password: this.user.user_password,
      }

    });
    dialogRef.afterClosed().subscribe((res) => {
      if(res != undefined){
        this.userService.addUser(res).subscribe((res) => {
          console.log(res)
          if (res) {
            alert('Them moi thanh cong');
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
  avatar?: string;
  user_password: string;
}
