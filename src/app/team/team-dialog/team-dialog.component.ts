import { ProgramService } from '../../service/program.service'
import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog'
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Team } from '../team-list/team-list.component';
@Component({
  selector: 'app-team-dialog',
  templateUrl: './team-dialog.component.html',
  styleUrls: ['./team-dialog.component.css']
})
export class TeamDialogComponent implements OnInit {
  title: any;
  team = {} as Team
  form: FormGroup;
  courses = [];

  constructor(
    private fb: FormBuilder,
    public dialogRef: MatDialogRef<TeamDialogComponent>,
    private programService: ProgramService,
    @Inject(MAT_DIALOG_DATA) public data: any

  ) { }

  ngOnInit(): void {
    this.initForm();
    this.team = this.data;
    this.getAllCourses();
  }

  initForm(){
    this.form = this.fb.group({
      name: ['',[Validators.required]],
      course: ['', [Validators.required]],
    })
  }

  getAllCourses() {
    this.programService.getAllProgram().subscribe((res) => {
      this.courses = res;
    })
  }
  save() {
    this.dialogRef.close(this.team);
  }
}
