import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuController } from '@ionic/angular';
import { LoginService } from 'src/app/services/login/login.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  constructor(public router: Router,
    private conexionUser: LoginService,
    public menu: MenuController) { }

  ngOnInit() {
  }
  cerrarsesion(){
    this.menu.close('menu')
    this.conexionUser.logout()
    
    
}

}
