import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GruposDeApoyoRegistroPageRoutingModule } from './grupos-de-apoyo-registro-routing.module';

import { GruposDeApoyoRegistroPage } from './grupos-de-apoyo-registro.page';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    IonicModule,
    GruposDeApoyoRegistroPageRoutingModule
  ],
  declarations: [GruposDeApoyoRegistroPage]
})
export class GruposDeApoyoRegistroPageModule {}
