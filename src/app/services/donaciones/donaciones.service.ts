import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Api } from '../enum'
import {Donacion} from '../../interfaces/donacion';
@Injectable({
  providedIn: 'root'
})
export class DonacionesService {
  private api=Api.api+'donation/';

  constructor(private http:HttpClient) { }

  headers = new HttpHeaders().set('Token', localStorage.getItem('ACCESS_TOKEN'));

  getDonaciones(){
    const path= this.api;
    return this.http.get<Donacion[]>(path, { headers: this.headers });
  }

  getDonacionesId(id: string){ 
    return this.http.get<Donacion>(this.api + id, { headers: this.headers });

  }

  postDonaciones(donaciones){
    const path= this.api;
    return this.http.post(path, donaciones, { headers: this.headers })

  }

  updateDonaciones(donaciones,id: string){
    const path= this.api+id+'/';
    return this.http.patch(path, donaciones, { headers: this.headers })
  }
  
  deleteDonaciones(id: string){
    const path=  `${this.api}${id}`;
    return this.http.delete(path, { headers: this.headers })
  }

  updateDonaciones0(id: string){
    const path= this.api+id+'/';
    return this.http.patch(path, { headers: this.headers })
  } 

  CambiarEstadoDonaciones(id: string){
    const path= this.api+id+'/';
    return this.http.patch(path, { headers: this.headers })
  } 

}
