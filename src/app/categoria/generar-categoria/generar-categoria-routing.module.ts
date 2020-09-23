import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GenerarCategoriaPage } from './generar-categoria.page';

const routes: Routes = [
  {
    path: '',
    component: GenerarCategoriaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GenerarCategoriaPageRoutingModule {}
