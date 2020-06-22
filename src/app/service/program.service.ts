import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Program } from '../models/program.model'
import { Observable } from 'rxjs'
@Injectable({
  providedIn: 'root'
})
export class ProgramService {

  public _url: string = "http://10.9.11.121:3000/courses";
  constructor(
    public http: HttpClient
  ) { }

  getAllProgram() : Observable<Program[]> {
    return this.http.get<Program[]>(this._url)
  }
  getProgram(id:number) : Observable<Program[]> {
    return this.http.get<Program[]>(this._url+'/'+id)
  }
  addProgram(program : Program) : Observable<Program[]> {
    return this.http.post<Program[]>(this._url,program)
  }
  deleteProgram(id : number) : Observable<Program[]> {
    return this.http.delete<Program[]>(this._url + '/' +id)
  }
  updateProgram(program : Program) : Observable<Program[]> {
    return this.http.put<Program[]>(`${this._url}/${program.id_course}`, program)
  }
}
