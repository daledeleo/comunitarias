import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Api } from '../enum'

@Injectable({
  providedIn: 'root'
})
export class ActivityService {

  private api=Api.api+'activity/';
  constructor(private http:HttpClient) {
  }
  
  headers = new HttpHeaders().set('Token', localStorage.getItem('ACCESS_TOKEN'));

  getActivity(){
    const path= this.api;
    return this.http.get<any>(path, { headers: this.headers })
  }

  getActivityId(id: string){ 
    return this.http.get<any>(this.api + id, { headers: this.headers });

  }
  
  postActivity(activity){
    const path= this.api;
    return this.http.post(path, activity, { headers: this.headers })
  }

  updateActivity(activity,id: string){
    const path= this.api+id+'/';
    return this.http.patch(path, activity, { headers: this.headers })
  }
  
  deleteActivity(id: string){
    const path=  `${this.api}${id}`;
    return this.http.delete(path, { headers: this.headers })
  }
}
