import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GrupoDeApoyoIngresarMiembrosPage } from './grupo-de-apoyo-ingresar-miembros.page';

const routes: Routes = [
  {
    path: '',
    component: GrupoDeApoyoIngresarMiembrosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GrupoDeApoyoIngresarMiembrosPageRoutingModule {}
