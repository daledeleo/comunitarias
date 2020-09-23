import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RegistroDistribucionPageRoutingModule } from './registro-distribucion-routing.module';

import { RegistroDistribucionPage } from './registro-distribucion.page';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    IonicModule,
    RegistroDistribucionPageRoutingModule
  ],
  declarations: [RegistroDistribucionPage]
})
export class RegistroDistribucionPageModule {}
