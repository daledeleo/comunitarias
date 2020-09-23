import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-lista-menu',
  templateUrl: './lista-menu.component.html',
  styleUrls: ['./lista-menu.component.scss'],
})
export class ListaMenuComponent implements OnInit {

  constructor(public router: Router,
              public menu: MenuController) { }

  ngOnInit() {}

  dirigirpantalla(ventana:string){
    this.router.navigateByUrl(ventana);
    this.menu.close('menu')
  }
}
