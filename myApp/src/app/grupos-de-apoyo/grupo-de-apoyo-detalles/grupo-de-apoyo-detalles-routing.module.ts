import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GrupoDeApoyoDetallesPage } from './grupo-de-apoyo-detalles.page';

const routes: Routes = [
  {
    path: '',
    component: GrupoDeApoyoDetallesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GrupoDeApoyoDetallesPageRoutingModule {}
