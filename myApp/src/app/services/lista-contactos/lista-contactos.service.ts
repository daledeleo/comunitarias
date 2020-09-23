import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Api } from '../enum';
import {ContactosList} from '../../interfaces/contactosList';

@Injectable({
  providedIn: 'root'
})
export class ListaContactosService {
  private api=Api.api+'provider-contact/';

  constructor(private http: HttpClient) { 

  }

  headers = new HttpHeaders().set('Token', localStorage.getItem('ACCESS_TOKEN'));

  getContactos(){
    const path= this.api;
    return this.http.get<ContactosList[]>(path, { headers: this.headers });
  }

  getContactosId(id: string){ 
    return this.http.get<ContactosList>(this.api + id, { headers: this.headers });

  }

  postContactos(contacto){
    const path= this.api;
    return this.http.post(path, contacto, { headers: this.headers });

  }

  updateContactos(contacto,id: string){
    const path= this.api+id+'/';
    return this.http.patch(path, contacto, { headers: this.headers });
  }
  
  deleteContactos(id: string){
    const path=  `${this.api}${id}`;
    return this.http.delete(path, { headers: this.headers });
  }
  
}
