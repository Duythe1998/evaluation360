import { __decorate, __param } from "tslib";
import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Validators } from '@angular/forms';
let UserDialogComponent = class UserDialogComponent {
    constructor(fb, dialogRef, data) {
        this.fb = fb;
        this.dialogRef = dialogRef;
        this.data = data;
        this.phoneNumber = "^(\+\d{1,3}[- ]?)?\d{10}$";
        this.user = {};
    }
    ngOnInit() {
        this.initForm();
        this.user = this.data;
        console.log(this.data);
        console.log(this.user);
    }
    initForm() {
        this.form = this.fb.group({
            name: ['', [Validators.required]],
            email: ['', [Validators.required, Validators.email]],
            password: ['', [Validators.required]],
            address: ['', [Validators.required]],
            birth: ['', [Validators.required]],
            phone: ['', [Validators.required, Validators.pattern("(([+][(]?[0-9]{1,3}[)]?)|([(]?[0-9]{4}[)]?))s*[)]?[-s.]?[(]?[0-9]{1,3}[)]?([-s.]?[0-9]{3})([-s.]?[0-9]{3,4})")]],
            avatar: [''],
        });
    }
    get f() { return this.form.controls; }
    save() {
        this.dialogRef.close(this.user);
    }
};
UserDialogComponent = __decorate([
    Component({
        selector: 'app-user-dialog',
        templateUrl: './user-dialog.component.html',
        styleUrls: ['./user-dialog.component.css']
    }),
    __param(2, Inject(MAT_DIALOG_DATA))
], UserDialogComponent);
export { UserDialogComponent };
//# sourceMappingURL=user-dialog.component.js.map