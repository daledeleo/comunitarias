import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HomePageRoutingModule } from './home-routing.module';

import { HomePage } from './home.page';
import { ListaMenuComponentModule } from '../componentes/menu/lista-menu/lista-menu.module';



@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule,
    ListaMenuComponentModule
  ],
  declarations: [HomePage]
})
export class HomePageModule {}
