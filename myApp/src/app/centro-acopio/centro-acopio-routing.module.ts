import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CentroAcopioPage } from './centro-acopio.page';

const routes: Routes = [
  {
    path: '',
    component: CentroAcopioPage
  },
  {
    path: 'ubicacion',
    loadChildren: () => import('./ubicacion/ubicacion.module').then(m => m.UbicacionPageModule)
  },
  {
    path: 'centro-acopio-registro',
    loadChildren: () => import('./centro-acopio-registro/centro-acopio-registro.module').then(m => m.CentroAcopioRegistroPageModule)
  },  {
    path: 'centro-de-acopio-detalle',
    loadChildren: () => import('./centro-de-acopio-detalle/centro-de-acopio-detalle.module').then( m => m.CentroDeAcopioDetallePageModule)
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CentroAcopioPageRoutingModule { }
