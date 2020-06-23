import { Component, OnInit } from '@angular/core';
import {TeamService} from '../../service/team.service'
import { TeamDialogComponent } from '../team-dialog/team-dialog.component';
import { MatDialog } from '@angular/material/dialog';


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
    private dialog : MatDialog
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

  deleteTeam(id){
    if(confirm('Bạn có chắc muốn xóa không ? ')){
      this.teamService.deleteTeam(id).subscribe((res) => {
        if(res){
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
            alert('Them moi thanh cong');
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
}
