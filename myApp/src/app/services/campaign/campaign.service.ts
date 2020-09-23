import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {Campaign} from '../../interfaces/campaign';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Api } from '../enum'

@Injectable({
  providedIn: 'root'
})
export class CampaignService {
  private api=Api.api+'campaign/';
  
  constructor(private http: HttpClient) {
    console.log("campañas");
  }

  headers = new HttpHeaders().set('Token', localStorage.getItem('ACCESS_TOKEN'));

  getCampaigns(){
    const path= this.api;
    return this.http.get<Campaign[]>(path, { headers: this.headers })
  }

  getCampaignsId(id: string){ 
    return this.http.get<Campaign>(this.api + id, { headers: this.headers });

  }

  postCampaigns(campaign){
    const path= this.api;
    return this.http.post(path, campaign, { headers: this.headers })

  }

  updateCampaigns(campaign,id: string){
    const path= this.api+id+'/';
    return this.http.patch(path, campaign, { headers: this.headers })
  }
  
  deleteCampaigns(id: string){
    const path=  `${this.api}${id}`;
    return this.http.delete(path, { headers: this.headers })
  }

  updateCampaigns0(id: string){
    const path= this.api+id+'/';
    return this.http.patch(path,
    {
      state:'0',
      headers: this.headers
    })

  }  
  
}
