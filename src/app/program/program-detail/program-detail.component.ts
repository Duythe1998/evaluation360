import { Component, OnInit,Inject } from '@angular/core';
import {ProgramService} from '../../service/program.service'
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
@Component({
  selector: 'app-program-detail',
  templateUrl: './program-detail.component.html',
  styleUrls: ['./program-detail.component.css']
})
export class ProgramDetailComponent implements OnInit {
  program
  constructor(
    public programService : ProgramService,
    @Inject(MAT_DIALOG_DATA) public data :any,
    public dialogRef: MatDialogRef<ProgramDetailComponent>

  ) { }

  ngOnInit(): void {
    this.program = this.data;
  }

}
