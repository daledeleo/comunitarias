import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DistribucionPage } from './distribucion.page';

const routes: Routes = [
  {
    path: '',
    component: DistribucionPage
  },
  {
    path: 'registro-distribucion',
    loadChildren: () => import('./registro-distribucion/registro-distribucion.module').then( m => m.RegistroDistribucionPageModule)
  },
  {
    path: 'distribucion-detalles',
    loadChildren: () => import('./distribucion-detalles/distribucion-detalles.module').then( m => m.DistribucionDetallesPageModule)
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DistribucionPageRoutingModule {}
