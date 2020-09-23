import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

import { UbicacionPageRoutingModule } from './ubicacion-routing.module';
import { UbicacionPage } from './ubicacion.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UbicacionPageRoutingModule,
    ReactiveFormsModule,
    
  ],
  declarations: [UbicacionPage]
})
export class UbicacionPageModule {}
