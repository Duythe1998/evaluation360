import { Component, OnInit } from '@angular/core';
import {TeamService} from '../../service/team.service'


@Component({
  selector: 'app-team-list',
  templateUrl: './team-list.component.html',
  styleUrls: ['./team-list.component.css']
})
export class TeamListComponent implements OnInit {

  team = {} as Team;
  teams = [];
  constructor(
    private teamService: TeamService,
  ) { }

  ngOnInit(): void {
    this.getAllTeam();
    console.log(this.teams)
  }

  getAllTeam(){
    this.teamService.getAllTeam().subscribe((res) => {
      this.teams = res;
      console.log(this.teams)
    })
  }

}
export interface Team {
  id_course: number;
  id_team: number;
  name_team: string;
}
