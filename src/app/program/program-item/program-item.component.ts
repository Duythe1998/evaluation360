import { Component, OnInit, Inject } from '@angular/core';
import { Program } from 'src/app/models/program.model';
import {ProgramService} from '../../service/program.service'
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-program-item',
  templateUrl:'./program-item.component.html',
  styleUrls: ['./program-item.component.css']
})
export class ProgramItemComponent implements OnInit {
  program : Program
  constructor(
    public programService : ProgramService,
    @Inject(MAT_DIALOG_DATA) public data :any,
    public dialogRef: MatDialogRef<ProgramItemComponent>
  ) {}

  ngOnInit(): void {
    this.program = this.data;
  }
  done(){
    this.dialogRef.close(this.program)
    console.log(this.program);
  }

}
