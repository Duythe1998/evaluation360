import { Component, OnInit, ViewChild } from '@angular/core';
import {TeamService} from '../../service/team.service'
import { TeamDialogComponent } from '../team-dialog/team-dialog.component';
import { MatDialog } from '@angular/material/dialog';
import { TeamDetailComponent } from '../team-detail/team-detail.component';
import { ToastrService } from 'ngx-toastr';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';



@Component({
  selector: 'app-team-list',
  templateUrl:'./team-list.component.html',
  styleUrls: ['./team-list.component.css']
})
export class TeamListComponent implements OnInit {
  dataSource : any;
  team = {} as Team;
  teams : Team[] = [];

  displayedColumns : string[] = ['STT','name_team','name_course','actions']

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;

  constructor(
    private teamService: TeamService,
    private dialog : MatDialog,
    private toastr: ToastrService
  ) { }

  ngOnInit(): void {
    this.getAllTeam();
    console.log(this.teams)
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    console.log(filterValue);
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  getAllTeam(){
    this.teamService.getAllTeam().subscribe((res) => {
      this.teams = res;
      this.dataSource = new MatTableDataSource<Team>(this.teams)
      this.dataSource.paginator = this.paginator;
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
        name_team : this.team.name_team,
        id_team : this.team.id_team,
        name_course : this.team.name_course,
        id_course: this.team.id_course
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
      name_team : team.name_team,
      id_team : team.id_team,
      name_course : team.name_course,
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
  user_name: string;
}
