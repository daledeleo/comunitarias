import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GenerarCategoriaPageRoutingModule } from './generar-categoria-routing.module';

import { GenerarCategoriaPage } from './generar-categoria.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GenerarCategoriaPageRoutingModule
  ],
  declarations: [GenerarCategoriaPage]
})
export class GenerarCategoriaPageModule {}
