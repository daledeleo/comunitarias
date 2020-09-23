import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GenerarDonacionPage } from './generar-donacion.page';

const routes: Routes = [
  {
    path: '',
    component: GenerarDonacionPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GenerarDonacionPageRoutingModule {}
