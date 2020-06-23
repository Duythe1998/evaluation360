import { Component, OnInit,OnDestroy } from '@angular/core';
import {ProgramService} from '../../service/program.service'
import { Subscription} from 'rxjs'
import { Program } from 'src/app/models/program.model';
import * as moment from 'moment'
@Component({
  selector: 'app-program-list',
  templateUrl:'./program-list.component.html',
  styleUrls: ['./program-list.component.css']
})
export class ProgramListComponent implements OnInit {
  public subscription:Subscription
  public programs
  public program
  public condition: boolean =true;
  constructor(
    public programService : ProgramService
  ) { }

  ngOnInit(): void {
    this.program = new Program();
    this.getAllData();

    //load data edit
  }
  // get all data from Database
  getAllData() {
    this.subscription = this.programService.getAllProgram().subscribe(data => {
      this.programs = data
    })
  }
  
  // add new data to database
  onAddProgram() {
    this.subscription = this.programService.addProgram(this.program).subscribe(data => {
      this.getAllData() // render data after add new one
    })
  }
  // delete data
  onDeleteProgram(id : number) {
    this.subscription = this.programService.deleteProgram(id).subscribe((data)=>{
      this.getAllData() // render data after add delete one
    })
  }
  // load data when click program
  loadData(id : number) {
    this.subscription = this.programService.getProgram(id).subscribe((data)=>{
     this.program = {
        name_course : data[0].name_course,
        date_start:  moment(data[0].date_start).format('YYYY-MM-DD'),
        date_end:  moment(data[0].end).format('YYYY-MM-DD'),
        description:  data[0].description
     };
     console.log(`[program]`,this.program)
    })
  }
  //update data
  onUpdateProgram(program : Program) {
    this.subscription = this.programService.updateProgram(program).subscribe((data)=>{
      console.log(data)
      this.getAllData() // render data after add delete one
    })
  }
  //condition
  conditionEdit() {
    this.condition =false
    console.log(this.condition)
  }
  conditionAdd() {
    this.condition =true
    this.program ={}
  }
  AddorUpdate(program) {
    if(this.condition) {
      this.onAddProgram()
      console.log('add')
    }
    else{
      this.onUpdateProgram(program)
      console.log('edit')
    }
  }
  ngOnDestroy(){
    if ( this.subscription){
      this.subscription.unsubscribe();
    }
  }
}
