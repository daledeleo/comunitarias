import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CentroDeAcopioDetallePage } from './centro-de-acopio-detalle.page';

const routes: Routes = [
  {
    path: '',
    component: CentroDeAcopioDetallePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CentroDeAcopioDetallePageRoutingModule {}
