import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuController } from '@ionic/angular';
import { LoginService } from 'src/app/services/login/login.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent implements OnInit {

  constructor(public router: Router,
              private conexionUser: LoginService,
              public menu: MenuController) { }

  ngOnInit() {}

  cerrarsesion(){
    this.menu.close('menu')
    this.conexionUser.logout()
    
    
}

}
