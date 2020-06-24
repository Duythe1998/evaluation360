import { ProgramService } from './../../service/program.service';
import { TeamService } from './../../service/team.service';
import { User } from './../users-list/users-list.component';
import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog'
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-user-dialog',
  templateUrl: './user-dialog.component.html',
  styleUrls: ['./user-dialog.component.css']
})
export class UserDialogComponent implements OnInit {
  user = {} as User
  form: FormGroup;
  courses = [];
  teams = [];
  constructor(
    private fb: FormBuilder,
    public dialogRef: MatDialogRef<UserDialogComponent>,
    private teamService: TeamService,
    private programService: ProgramService,
    @Inject(MAT_DIALOG_DATA) public data: any

  ) { }

  ngOnInit(): void {

    this.initForm();
    this.user = this.data;
    this.getAllCourses();
    this.form.get('course').valueChanges.subscribe((course) => {
      console.log(course)
      if (course) {
        this.teamService.getAllTeam().subscribe((res) => {
          if (res) {
            this.teams = res.filter((t) => {
              return t.id_course === course;
            });
          }
        })
      }
    })
    this.form.valueChanges.subscribe((aaa) => {
      console.log(aaa)
    })
  }
  initForm() {
    this.form = this.fb.group({
      name: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]],
      address: ['', [Validators.required]],
      birth: ['', [Validators.required]],
      phone: ['', [Validators.required, Validators.pattern("(([+][(]?[0-9]{1,3}[)]?)|([(]?[0-9]{4}[)]?))s*[)]?[-s.]?[(]?[0-9]{1,3}[)]?([-s.]?[0-9]{3})([-s.]?[0-9]{3,4})")]],
      course: ['', [Validators.required]],
      team: ['', [Validators.required]],
    })

  }
  getAllCourses() {
    this.programService.getAllProgram().subscribe((res) => {
      this.courses = res;
    })
  }
  save() {
    this.dialogRef.close(this.user);
  }
}
