import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DetalleDonacionPageRoutingModule } from './detalle-donacion-routing.module';

import { DetalleDonacionPage } from './detalle-donacion.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DetalleDonacionPageRoutingModule
  ],
  declarations: [DetalleDonacionPage]
})
export class DetalleDonacionPageModule {}
