import { Component, OnInit, Inject } from '@angular/core';
import { Team } from '../team-list/team-list.component';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ProgramService } from '../../service/program.service';
import { TeamService } from '../../service/team.service';
import { UserService } from '../../service/user.service'

@Component({
  selector: 'app-team-detail',
  templateUrl: './team-detail.component.html',
  styleUrls: ['./team-detail.component.css']
})
export class TeamDetailComponent implements OnInit {
  team = {} as Team
  users = []
  courses = [];

  constructor(
    public dialogRef: MatDialogRef<TeamDetailComponent>,
    private programService: ProgramService,
    private teamService: TeamService,
    private userService: UserService,
    @Inject(MAT_DIALOG_DATA) public data : any
  ) { }

  ngOnInit(): void {
    this.team = this.data;
    console.log(this.team);
    this.getAllUser();
  }

  getAllUser(){
    this.userService.getAllUser().subscribe((res) => {
      this.users = res.filter((user) => {
        return user.id_team === this.team.id_team;
      });


    })

  }
}
