import { __decorate } from "tslib";
import { Injectable } from '@angular/core';
let UserService = class UserService {
    constructor(http) {
        this.http = http;
        this._baseURL = 'http://10.9.11.121:3000/';
    }
    getAllUser() {
        return this.http.get(this._baseURL + `users`);
    }
    deleteUser(id) {
        return this.http.delete(this._baseURL + `users/${id}`);
    }
    addUser(user) {
        return this.http.post(this._baseURL + `users`, user);
    }
    updateUser(user, id) {
        return this.http.put(this._baseURL + `users/${id}`, user);
    }
};
UserService = __decorate([
    Injectable({
        providedIn: 'root'
    })
], UserService);
export { UserService };
//# sourceMappingURL=user.service.js.map