import { UserService } from './../user.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css']
})
export class UsersListComponent implements OnInit {
  users: any
  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.getAllUsers();
    console.log(this.users)
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
}
export interface User {
  id: number;
  name: string;
  address: string;
  phone: string;
  birth: Date;
  avatar: string;
}
