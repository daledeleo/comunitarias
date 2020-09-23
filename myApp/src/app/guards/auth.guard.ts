import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AlertController } from '@ionic/angular';
import { LoginService } from '../services/login/login.service';
import { isNullOrUndefined } from 'util';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(public router: Router,
    public alertController: AlertController,
    private conexionUser: LoginService) { }
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
       
      if(this.conexionUser.tokenauth() == 0){
        this.router.navigateByUrl('/login');
        return false;
      }else{
        return true;
      }
     
    }
  
}
