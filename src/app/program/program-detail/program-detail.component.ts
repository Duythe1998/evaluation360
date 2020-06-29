import { Component, OnInit,Inject } from '@angular/core';
import {ProgramService} from '../../service/program.service'
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { TeamService } from 'src/app/service/team.service';
@Component({
  selector: 'app-program-detail',
  templateUrl: './program-detail.component.html',
  styleUrls: ['./program-detail.component.css']
})
export class ProgramDetailComponent implements OnInit {
  program
  userTeams
  programs
  constructor(
    public programService : ProgramService,
    private teamService: TeamService,
    @Inject(MAT_DIALOG_DATA) public data :any,
    public dialogRef: MatDialogRef<ProgramDetailComponent>

  ) { }

  ngOnInit(): void {
    this.program = this.data;
    this.getUserTeam()

  }
  getAllProgram() {
    this.programService.getAllProgram().subscribe(res => {
      this.programs = res;
      console.log(this.programs)
    })
  }
  getUserTeam() {
    this.teamService.getAllTeam().subscribe(res => {
      this.userTeams = res.filter(userTeam => {
        return userTeam.id_course == this.program.id_course
       
      })  
      console.log(res)
    })
  }
  

}
