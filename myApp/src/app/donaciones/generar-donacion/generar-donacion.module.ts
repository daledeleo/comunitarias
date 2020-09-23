import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GenerarDonacionPageRoutingModule } from './generar-donacion-routing.module';

import { GenerarDonacionPage } from './generar-donacion.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GenerarDonacionPageRoutingModule
  ],
  declarations: [GenerarDonacionPage]
})
export class GenerarDonacionPageModule {}
