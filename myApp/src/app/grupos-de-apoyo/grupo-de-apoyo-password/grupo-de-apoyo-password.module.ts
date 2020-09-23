import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GrupoDeApoyoPasswordPageRoutingModule } from './grupo-de-apoyo-password-routing.module';

import { GrupoDeApoyoPasswordPage } from './grupo-de-apoyo-password.page';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    IonicModule,
    GrupoDeApoyoPasswordPageRoutingModule
  ],
  declarations: [GrupoDeApoyoPasswordPage]
})
export class GrupoDeApoyoPasswordPageModule {}
