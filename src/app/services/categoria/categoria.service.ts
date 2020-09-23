import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'

import {Categoria} from '../../interfaces/categoria';
import { $$ } from 'protractor';
import { Api } from '../enum'

@Injectable({
  providedIn: 'root'
})
export class CategoriaService {
  private api=Api.api+'category/';

  constructor(private http:HttpClient) {
   console.log("categorias de donaciones");
  }
  
  headers = new HttpHeaders().set('Token', localStorage.getItem('ACCESS_TOKEN'));

  getCategorias(){
    const path= this.api;
    return this.http.get<Categoria[]>(path, { headers: this.headers })
  }

  getCategoriaId(id: string){ 
    return this.http.get<Categoria>(this.api + id, { headers: this.headers });

  }
  
  postCategorias(categoria){
    const path= this.api;
    return this.http.post(path, categoria, { headers: this.headers })
  }

  updateCategorias(categoria,id: string){
    const path= this.api+id+'/';
    return this.http.patch(path, categoria, { headers: this.headers })
  }
  
  deleteCategorias(id: string){
    const path=  `${this.api}${id}`;
    return this.http.delete(path, { headers: this.headers })
  }

  updateCategoria0(id: string){
    const path= this.api+id+'/';
    return this.http.patch(path, { headers: this.headers })

  }  

}
