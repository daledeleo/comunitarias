import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Voluntario } from '../../clases/voluntario/voluntario'
import { Api } from '../enum'

@Injectable({
  providedIn: 'root'
})
export class VoluntariosService {
  private api=Api.api+'volunteer/';

  constructor(private http:HttpClient) { }

  headers = new HttpHeaders().set('Token', localStorage.getItem('ACCESS_TOKEN'));

  getVoluntarios() {
    const path = this.api;
    return this.http.get<Voluntario[]>(this.api, {headers: this.headers})
  }
  getApi() {
    return this.api;
  }

  postVoluntario(Grupo) {
    const path= this.api;
    return this.http.post(path, Grupo, { headers: this.headers })
  }

  getVoluntarioId(id: string){ 
    return this.http.get<Voluntario>(this.api + id, { headers: this.headers });
  }

  deletevoluntario(id: string){
    const path=  `${this.api}${id}`;
    return this.http.delete(path, { headers: this.headers })
  }

  updateVoluntario(voluntario,id:string){
    const path= this.api+id+'/';
    return this.http.patch(path, voluntario, { headers: this.headers });
  }
}
