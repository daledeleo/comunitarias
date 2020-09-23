import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EditarDonacionPageRoutingModule } from './editar-donacion-routing.module';

import { EditarDonacionPage } from './editar-donacion.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EditarDonacionPageRoutingModule
  ],
  declarations: [EditarDonacionPage]
})
export class EditarDonacionPageModule {}
