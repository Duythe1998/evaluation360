import { Component, OnInit, Inject } from '@angular/core';
import { Program } from 'src/app/models/program.model';
import {ProgramService} from '../../service/program.service'
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { forbiddenNameValidator } from 'src/app/shared/program-name.validator';

@Component({
  selector: 'app-program-item',
  templateUrl:'./program-item.component.html',
  styleUrls: ['./program-item.component.css']
})
export class ProgramItemComponent implements OnInit {
  program : Program
  form: FormGroup;
  status:boolean = true;
  dateWrong = false;
  constructor(
    public programService : ProgramService,
    @Inject(MAT_DIALOG_DATA) public data :any,
    public dialogRef: MatDialogRef<ProgramItemComponent>,
    private fb: FormBuilder
    
  ) {}

  ngOnInit(): void {
    this.program = this.data;
    this.programForm()
  }
  programForm() {
    this.form = this.fb.group({
      nameCourse: ['', [Validators.required, Validators.minLength(3)]],
      dateStart: ['', [Validators.required]],
      dateEnd: ['', [Validators.required,]],
      condition:['show', [Validators.required,]]
    })
  }
  
  error:any={isError:false,errorMessage:''};

  compareTwoDates(){
    if(new Date(this.form.controls['dateEnd'].value)<new Date(this.form.controls['dateStart'].value)){
        this.error={isError:true,errorMessage:"Ngày kết thúc phải lớn hơn ngày bắt đầu"};
        this.form.patchValue({condition:''})
        console.log(this.form.invalid)
      }
      else{
        this.error={isError:false,errorMessage:""};
        this.form.patchValue({condition:'show'});
      }
    }
  get nameCourse() {
    return this.form .get('nameCourse')
  }
  get dateStart() {
    return this.form .get('dateStart')
  }
  get dateEnd() {
    return this.form .get('dateEnd')
  }
    
  done(){
    this.dialogRef.close(this.program)
    console.log(this.program);
  }
} 
