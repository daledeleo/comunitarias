import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DistribucionDetallesPageRoutingModule } from './distribucion-detalles-routing.module';

import { DistribucionDetallesPage } from './distribucion-detalles.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DistribucionDetallesPageRoutingModule
  ],
  declarations: [DistribucionDetallesPage]
})
export class DistribucionDetallesPageModule {}
