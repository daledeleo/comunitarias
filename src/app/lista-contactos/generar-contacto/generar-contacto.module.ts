import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GenerarContactoPageRoutingModule } from './generar-contacto-routing.module';

import { GenerarContactoPage } from './generar-contacto.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GenerarContactoPageRoutingModule
  ],
  declarations: [GenerarContactoPage]
})
export class GenerarContactoPageModule {}
