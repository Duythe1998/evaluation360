import { __decorate } from "tslib";
import { Component } from '@angular/core';
import { Program } from 'src/app/models/program.model';
let ProgramListComponent = class ProgramListComponent {
    constructor(programService) {
        this.programService = programService;
    }
    ngOnInit() {
        this.program = new Program();
        this.getAllData();
    }
    // get all data from Database
    getAllData() {
        this.subscription = this.programService.getAllProgram().subscribe(data => {
            this.programs = data;
        });
    }
    ngOnDestroy() {
        if (this.subscription) {
            this.subscription.unsubscribe();
        }
    }
    // add new data to database
    onAddProgram() {
        this.subscription = this.programService.addProgram(this.program).subscribe(data => {
            this.getAllData(); // render data after add new one
        });
    }
    // delete data 
    onDeleteProgram(id) {
        this.subscription = this.programService.deleteProgram(id).subscribe((data) => {
            this.getAllData(); // render data after add delete one
        });
    }
};
ProgramListComponent = __decorate([
    Component({
        selector: 'app-program-list',
        templateUrl: './program-list.component.html',
        styleUrls: ['./program-list.component.css']
    })
], ProgramListComponent);
export { ProgramListComponent };
//# sourceMappingURL=program-list.component.js.map