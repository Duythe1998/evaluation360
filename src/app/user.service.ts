import { User } from './users/users-list/users-list.component';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private _baseURL = 'http://10.9.11.121:3000/';

  constructor(private http: HttpClient) {
  }
  getAllUser(): Observable<User[]> {
    return this.http.get<User[]>(this._baseURL + `users`);
  }
  deleteUser(id: number) {
    return this.http.delete(this._baseURL + `users/${id}`);
  }
  addUser(user: User) {
    return this.http.post(this._baseURL + `users`, user);
  }
  updateUser(user: User, id: number) {
    return this.http.put(this._baseURL + `user/${id}`, user)
  }
}
