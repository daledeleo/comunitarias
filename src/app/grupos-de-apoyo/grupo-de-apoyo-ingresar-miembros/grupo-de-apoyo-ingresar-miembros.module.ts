import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GrupoDeApoyoIngresarMiembrosPageRoutingModule } from './grupo-de-apoyo-ingresar-miembros-routing.module';

import { GrupoDeApoyoIngresarMiembrosPage } from './grupo-de-apoyo-ingresar-miembros.page';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    IonicModule,
    GrupoDeApoyoIngresarMiembrosPageRoutingModule
  ],
  declarations: [GrupoDeApoyoIngresarMiembrosPage]
})
export class GrupoDeApoyoIngresarMiembrosPageModule {}
