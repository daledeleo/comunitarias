import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CentroDeAcopioDetallePageRoutingModule } from './centro-de-acopio-detalle-routing.module';

import { CentroDeAcopioDetallePage } from './centro-de-acopio-detalle.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CentroDeAcopioDetallePageRoutingModule
  ],
  declarations: [CentroDeAcopioDetallePage]
})
export class CentroDeAcopioDetallePageModule {}
