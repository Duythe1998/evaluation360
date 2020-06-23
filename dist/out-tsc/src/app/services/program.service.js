import { __decorate } from "tslib";
import { Injectable } from '@angular/core';
let ProgramService = class ProgramService {
    constructor(http) {
        this.http = http;
        this._url = "https://5ee9b3b8ca5957001602a086.mockapi.io/program";
    }
    getAllProgram() {
        return this.http.get(this._url);
    }
    addProgram(program) {
        return this.http.post(this._url, program);
    }
    deleteProgram(id) {
        return this.http.delete(this._url + '/' + id);
    }
};
ProgramService = __decorate([
    Injectable({
        providedIn: 'root'
    })
], ProgramService);
export { ProgramService };
//# sourceMappingURL=program.service.js.map