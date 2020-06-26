import { Component, OnInit,Inject } from '@angular/core';
import {ProgramService} from '../../service/program.service'
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { UserService } from 'src/app/service/user.service';
@Component({
  selector: 'app-program-detail',
  templateUrl: './program-detail.component.html',
  styleUrls: ['./program-detail.component.css']
})
export class ProgramDetailComponent implements OnInit {
  program
  userTeams
  constructor(
    public programService : ProgramService,
    private userService: UserService,
    @Inject(MAT_DIALOG_DATA) public data :any,
    public dialogRef: MatDialogRef<ProgramDetailComponent>

  ) { }

  ngOnInit(): void {
    this.program = this.data;
    this.getUserTeam()
  }

  getUserTeam() {
    this.userService.getAllUser().subscribe(res => {
      this.userTeams = res.filter(userTeam => {
        return userTeam.id_course == this.program.id_course
      })
      
    })
  }
}
