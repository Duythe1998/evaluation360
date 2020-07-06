import { ToastrService } from 'ngx-toastr';
import { UserService } from './../../service/user.service';
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
  listUserEmail = [];
  constructor(
    private fb: FormBuilder,
    public dialogRef: MatDialogRef<UserDialogComponent>,
    private teamService: TeamService,
    private programService: ProgramService,
    private userService : UserService,
    private toastrService : ToastrService,
    @Inject(MAT_DIALOG_DATA) public data: any

  ) { }

  ngOnInit(): void {

    this.initForm();
    this.user = this.data;
    this.getInitCourses();
    this.getInitTeams(this.user.id_course)

  }

  initForm() {
    this.form = this.fb.group({
      name: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required,Validators.minLength(8),Validators.maxLength(15)]],
      address: ['', [Validators.required]],
      birth: ['', [Validators.required]],
      phone: ['', [Validators.required, Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$")]],
      course: ['', [Validators.required]],
      team: ['', [Validators.required]],
    })

  }

  getInitCourses() {
    this.programService.getAllProgram().subscribe((res) => {
      this.courses = res;
    })
  }

  getInitTeams(courseId){
    this.teamService.getAllTeam().subscribe((res) => {          
      if (res) {
        this.teams = res.filter((t) => {
          return t.id_course === courseId;
        });
        
      }
    })
  }
  save() {
    this.dialogRef.close(this.user);
  }
  changeCourse(event){
    console.log(event)
    let course = event;
    if (course) {
      this.teamService.getAllTeam().subscribe((res) => {          
        if (res) {
          this.teams = res.filter((t) => {
            return t.id_course === course;
          });
          this.user.id_team = null
        }
      })
    }
  }
  checkEmailExits(event){
    let email = event;
    console.log(email)
    if(email){
      this.userService.getEmail(email).subscribe((result) => {
          if(result){
              this.toastrService.error("Email đã tồn tại");
              this.form.get('email').setValue('')        
          }
      })
    }
  }
 
}
