import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DonacionesPage } from './donaciones.page';

const routes: Routes = [
  {
    path: '',
    component: DonacionesPage
  },
  {
    path: 'generar-donacion',
    loadChildren: () => import('./generar-donacion/generar-donacion.module').then( m => m.GenerarDonacionPageModule)
  },  {
    path: 'detalle-donacion',
    loadChildren: () => import('./detalle-donacion/detalle-donacion.module').then( m => m.DetalleDonacionPageModule)
  },
  {
    path: 'editar-donacion',
    loadChildren: () => import('./editar-donacion/editar-donacion.module').then( m => m.EditarDonacionPageModule)
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DonacionesPageRoutingModule {}
