import { Injectable } from '@angular/core';
import { LoginService } from './login/login.service';
import { HttpHeaders } from '@angular/common/http';
import { Api } from './enum';


@Injectable({
  providedIn: 'root'
})
export class CreteByService {

  private nombre:string='';
  constructor(private loginService:LoginService){
    this.loginService.getUserId(this.loginService.getUserIdLogin()).subscribe(user=>{
      this.nombre=user.username
  });
  }

  getNombre():string{
      return this.nombre;
  }

  
}
