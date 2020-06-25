import { Component, OnInit,OnDestroy } from '@angular/core';
import {ProgramService} from '../../service/program.service'
import { Subscription} from 'rxjs'
import { Program } from 'src/app/models/program.model';
import {NgForm} from '@angular/forms'
import {MatDialog, MatDialogConfig} from '@angular/material/dialog'
import * as moment from 'moment'
import { ProgramItemComponent } from '../program-item/program-item.component';
import { ToastrService } from 'ngx-toastr';
import { ProgramDetailComponent } from '../program-detail/program-detail.component';
@Component({
  selector: 'app-program-list',
  templateUrl:'./program-list.component.html',
  styleUrls: ['./program-list.component.css']
})
export class ProgramListComponent implements OnInit {
  programs:Program[]
  program: Program
  conditionStatus:boolean = true
  constructor(
    public programService : ProgramService,
    private dialog:MatDialog,
    private toastr: ToastrService
  ) { }

  ngOnInit(): void {
    this.getAllProgram()
  }
  // get program to reander 
  getAllProgram() {
    this.programService.getAllProgram().subscribe(res => {
      this.programs = res;
      console.log(this.programs)
    })
  }


  // add or edit program item
  addOrEditProgram() {
    this.conditionStatus = true
    const dialogConfig = this.dialog.open(ProgramItemComponent,{
      autoFocus : true,
      disableClose: true,
      width:"40%",
      data:{
        
      },
    
    });
    dialogConfig.afterClosed().subscribe(res => {
      if (res) {
        this.programService.addProgram(res).subscribe((res) => {
          console.log(res)
          if (res) {
            this.toastr.success(res['message']);
            this.getAllProgram();
          }
        })
      }
    })
  }

  deleteProgram(id:number){
    if(confirm('Bạn có chắc muốn xóa không ? ')){
      this.programService.deleteProgram(id).subscribe(res => {
        this.toastr.success(res['message']);
        this.getAllProgram();
        console.log(res)
      })
    }
    
  }

  updateProgram(program:Program){
    this.conditionStatus = false
    const dialogConfig = this.dialog.open(ProgramItemComponent,{
      autoFocus : true,
      disableClose: true,
      width:"40%",
      data:{
        id_course: program.id_course,
        name_course: program.name_course,
        date_start:program.date_start ,
        date_end:program.date_end,
        description:program.description
      }
    });
    dialogConfig.afterClosed().subscribe(res => {
      this.programService.updateProgram(res).subscribe(res =>{
        this.toastr.success(res['message']);
        this.getAllProgram();
      })
    })
  }

  viewProgramDetail(program){
    const dialogConfig = this.dialog.open(ProgramDetailComponent,{
      autoFocus : true,
      disableClose: true,
      width:"70%",
      data:{
        id_course: program.id_course,
        name_course: program.name_course,
        date_start: program.date_start ,
        date_end:program.date_end,
        description:program.description
      }
    })
  }
  ngOnDestroy(){
  }
}
