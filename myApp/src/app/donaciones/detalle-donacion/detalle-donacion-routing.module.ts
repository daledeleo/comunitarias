import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DetalleDonacionPage } from './detalle-donacion.page';

const routes: Routes = [
  {
    path: '',
    component: DetalleDonacionPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DetalleDonacionPageRoutingModule {}
