import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';

import { TeamListComponent, Team } from '../team/team-list/team-list.component';


@Injectable({
  providedIn: 'root'
})
export class TeamService {
  private _baseURL = 'http://10.9.11.121:3000/';

  constructor(
    private http:HttpClient
  ) { }
  getAllTeam(): Observable<Team[]> {
    return this.http.get<Team[]>(this._baseURL + `teams`);
  }
  deleteTeam(id: number) {
    return this.http.delete(this._baseURL + `team/${id}`);
  }
  addUser(user: Team) {
    return this.http.post(this._baseURL + `team`, user);
  }
  updateUser(user: Team, id: number) {
    return this.http.put(this._baseURL + `team/${id}`, user)
  }
}
