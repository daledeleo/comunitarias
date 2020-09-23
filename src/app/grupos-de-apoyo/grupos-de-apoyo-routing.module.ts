import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GruposDeApoyoPage } from './grupos-de-apoyo.page';

const routes: Routes = [
  {
    path: '',
    component: GruposDeApoyoPage
  },
  {
    path: 'grupo-de-apoyo-detalles',
    loadChildren: () => import('./grupo-de-apoyo-detalles/grupo-de-apoyo-detalles.module').then( m => m.GrupoDeApoyoDetallesPageModule)
  },
  {
    path: 'grupo-de-apoyo-ingresar-miembros',
    loadChildren: () => import('./grupo-de-apoyo-ingresar-miembros/grupo-de-apoyo-ingresar-miembros.module').then( m => m.GrupoDeApoyoIngresarMiembrosPageModule)
  },
  {
    path: 'grupos-de-apoyo-registro',
    loadChildren: () => import('./grupos-de-apoyo-registro/grupos-de-apoyo-registro.module').then( m => m.GruposDeApoyoRegistroPageModule)
  },
  {
    path: 'grupo-de-apoyo-password',
    loadChildren: () => import('./grupo-de-apoyo-password/grupo-de-apoyo-password.module').then( m => m.GrupoDeApoyoPasswordPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GruposDeApoyoPageRoutingModule {}
