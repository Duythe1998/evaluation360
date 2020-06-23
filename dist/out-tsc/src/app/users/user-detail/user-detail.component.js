import { __decorate, __param } from "tslib";
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Component, Inject } from '@angular/core';
let UserDetailComponent = class UserDetailComponent {
    constructor(dialogRef, data) {
        this.dialogRef = dialogRef;
        this.data = data;
        this.user = {};
    }
    ngOnInit() {
        this.user = this.data;
        console.log(this.user);
    }
};
UserDetailComponent = __decorate([
    Component({
        selector: 'app-user-detail',
        templateUrl: './user-detail.component.html',
        styleUrls: ['./user-detail.component.css']
    }),
    __param(1, Inject(MAT_DIALOG_DATA))
], UserDetailComponent);
export { UserDetailComponent };
//# sourceMappingURL=user-detail.component.js.map