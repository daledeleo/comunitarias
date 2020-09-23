import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GrupoDeApoyoDetallesPageRoutingModule } from './grupo-de-apoyo-detalles-routing.module';

import { GrupoDeApoyoDetallesPage } from './grupo-de-apoyo-detalles.page';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    IonicModule,
    GrupoDeApoyoDetallesPageRoutingModule
  ],
  declarations: [GrupoDeApoyoDetallesPage]
})
export class GrupoDeApoyoDetallesPageModule {}
