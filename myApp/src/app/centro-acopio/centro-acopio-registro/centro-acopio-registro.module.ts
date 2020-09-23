import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CentroAcopioRegistroPageRoutingModule } from './centro-acopio-registro-routing.module';

import { CentroAcopioRegistroPage } from './centro-acopio-registro.page';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    IonicModule,
    CentroAcopioRegistroPageRoutingModule
  ],
  declarations: [CentroAcopioRegistroPage]
})
export class CentroAcopioRegistroPageModule {}
