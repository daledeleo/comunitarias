import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DistribucionDetallesPage } from './distribucion-detalles.page';

const routes: Routes = [
  {
    path: '',
    component: DistribucionDetallesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DistribucionDetallesPageRoutingModule {}
