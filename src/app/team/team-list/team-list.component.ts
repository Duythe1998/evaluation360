import { Component, OnInit } from '@angular/core';
import {TeamService} from '../../service/team.service'
import { TeamDialogComponent } from '../team-dialog/team-dialog.component';
import { MatDialog } from '@angular/material/dialog';
import { TeamDetailComponent } from '../team-detail/team-detail.component';
import * as moment from 'moment';
import { ToastrService } from 'ngx-toastr';



@Component({
  selector: 'app-team-list',
  templateUrl: './team-list.component.html',
  styleUrls: ['./team-list.component.css']
})
export class TeamListComponent implements OnInit {
  searchText;
  team = {} as Team;
  teams = [];
  constructor(
    private teamService: TeamService,
    private dialog : MatDialog,
    private toastr: ToastrService
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

  viewTeamDetail(team){
    const dialogRef = this.dialog.open(TeamDetailComponent,{
      width: '700px',
      data: {
        name_team: team.name_team,
        id_course : team.id_course,
        id_team: team.id_team,
        name_course: team.name_course
      }
    })
  }

  deleteTeam(id){
    if(confirm('Bạn có chắc muốn xóa không ? ')){
      this.teamService.deleteTeam(id).subscribe((res) => {
        if(res){
          this.toastr.success(res['message']);
          this.getAllTeam()
        }
      })
    }
  }
  addNewTeam() {
    const dialogRef = this.dialog.open(TeamDialogComponent, {
      width: '500px',
      data: {
        name_team : this.team.name_team
      }

    });
    dialogRef.afterClosed().subscribe((res) => {
      if (res) {
        this.teamService.addTeam(res).subscribe((res) => {
          console.log(res)
          if (res) {
            this.toastr.success(res['message']);
            this.getAllTeam();
          }
        })
      }
    })

  }

  updateTeam(team){
    console.log(team);
    let obj = {
      name_team: team.name_team,
      id_course: team.id_course
    }
    console.log(obj)
    const dialogRef = this.dialog.open(TeamDialogComponent, {
      width: '500px',
      data: obj
    });
    dialogRef.afterClosed().subscribe((res) => {
      console.log(res);
      if(res){
        this.teamService.updateTeam(res,team.id_team).subscribe((res) => {
          console.log(res);
          if(res){
            this.toastr.success(res['message']);
            this.getAllTeam();
          }
        })
      }
    })
  }

}
export interface Team {
  id_course: number;
  id_team: number;
  name_team: string;
  name_course:string;
}
