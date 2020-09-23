import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import {LoginService} from 'src/app/services/login/login.service';
import { AlertController } from '@ionic/angular';
import { isNullOrUndefined } from 'util';

@Injectable({
  providedIn: 'root'
})
export class NologinGuard implements CanActivate {
  constructor(public router: Router,
    public alertController: AlertController,
    private conexionUser: LoginService) { }
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      
    if( this.conexionUser.tokenauth() == 0){
      return true;
    }else{
      this.router.navigateByUrl('/home');
      return false;
      
    }
  }
  
}
