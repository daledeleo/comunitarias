import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Api } from '../enum'
import {Provider} from '../../interfaces/provider';

@Injectable({
  providedIn: 'root'
})
export class ProviderService {
  private api=Api.api+'provider/';

  constructor(private http:HttpClient) {
  }
  
  headers = new HttpHeaders().set('Token', localStorage.getItem('ACCESS_TOKEN'));

  getProvider(){
    const path= this.api;
    return this.http.get<Provider[]>(path, { headers: this.headers })
  }

  getProviderId(id: string){ 
    return this.http.get<Provider>(this.api + id, { headers: this.headers });

  }
  
  postProvider(provider){
    const path= this.api;
    return this.http.post(path, provider, { headers: this.headers })
  }

  updateProvider(provider,id: string){
    const path= this.api+id+'/';
    return this.http.patch(path, provider, { headers: this.headers })
  }
  
  deleteProvider(id: string){
    const path=  `${this.api}${id}`;
    return this.http.delete(path, { headers: this.headers })
  }

}
