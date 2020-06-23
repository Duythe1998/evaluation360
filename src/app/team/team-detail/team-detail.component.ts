import { Component, OnInit, Inject } from '@angular/core';
import { Team } from '../team-list/team-list.component';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ProgramService } from '../../service/program.service';

@Component({
  selector: 'app-team-detail',
  templateUrl: './team-detail.component.html',
  styleUrls: ['./team-detail.component.css']
})
export class TeamDetailComponent implements OnInit {
  team = {} as Team
  courses = [];
  constructor(
    public dialogRef: MatDialogRef<TeamDetailComponent>,
    private programService: ProgramService,
    @Inject(MAT_DIALOG_DATA) public data : any
  ) { }

  ngOnInit(): void {
    this.team = this.data;
    console.log(this.team);
    this.getAllCourses();
  }

  getAllCourses() {
    this.programService.getAllProgram().subscribe((res) => {
      this.courses = res;
    })
  }

}
