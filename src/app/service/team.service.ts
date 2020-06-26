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
  deleteTeam(id_team: number) {
    return this.http.delete(this._baseURL + `team/${id_team}`);
  }
  addTeam(team: Team) {
    return this.http.post(this._baseURL + `teams`, team);
  }
  updateTeam(team: Team, id: number) {
    return this.http.put(this._baseURL + `team/${id}`, team)
  }
}
