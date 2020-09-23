import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CategoriaPage } from './categoria.page';

const routes: Routes = [
  {
    path: '',
    component: CategoriaPage
  },
  {
    path: 'generar-categoria',
    loadChildren: () => import('./generar-categoria/generar-categoria.module').then( m => m.GenerarCategoriaPageModule)
  },  {
    path: 'editar-categoria',
    loadChildren: () => import('./editar-categoria/editar-categoria.module').then( m => m.EditarCategoriaPageModule)
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CategoriaPageRoutingModule {}
