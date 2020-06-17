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
  constructor(
    private fb: FormBuilder,
    public dialogRef: MatDialogRef<UserDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any

  ) { }

  ngOnInit(): void {

    this.initForm();
    this.user = this.data;
    console.log(this.data);
    console.log(this.user);

  }
  initForm() {
    this.form = this.fb.group({
      name: [ '', [Validators.required]],
      email: ['', [Validators.required]],
      password: ['', [Validators.required]],
      address: ['', [Validators.required]],
      birth: ['', [Validators.required]],
      phone: ['', [Validators.required]],
      avatar: [''],
    })
  }

  save() {
    this.dialogRef.close(this.user);
  }
}
