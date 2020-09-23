import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Api } from '../enum'
import {Scope} from '../../interfaces/scope';

@Injectable({
  providedIn: 'root'
})
export class ScopeService {
  private api=Api.api+'scope/';

  constructor(private http: HttpClient) { 
  }

  headers = new HttpHeaders().set('Token', localStorage.getItem('ACCESS_TOKEN'));

  getScope(){
    const path= this.api;
    return this.http.get<Scope[]>(path, { headers: this.headers });
  }
  getScopeId(id: string){ 
    return this.http.get<Scope>(this.api + id, { headers: this.headers });

  }
  postScope(Scope){
    const path= this.api;
    return this.http.post(path, Scope, { headers: this.headers })

  }

  updateScope(Scope,id: string){
    const path= this.api+id+'/';
    return this.http.patch(path, Scope, { headers: this.headers });
  }
  
  deleteScope(id: string){
    const path=  `${this.api}${id}`;
    return this.http.delete(path, { headers: this.headers })
  }
}
