import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListaContactosPage } from './lista-contactos.page';

const routes: Routes = [
  {
    path: '',
    component: ListaContactosPage
  },
  {
    path: 'generar-contacto',
    loadChildren: () => import('../lista-contactos/generar-contacto/generar-contacto.module').then( m => m.GenerarContactoPageModule)
  },
  {
    path: 'editar-contacto',
    loadChildren: () => import('../lista-contactos/editar-contacto/editar-contacto.module').then( m => m.EditarContactoPageModule)
  },
  {
    path: 'detalle-contacto',
    loadChildren: () => import('../lista-contactos/detalle-contacto/detalle-contacto.module').then( m => m.DetalleContactoPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListaContactosPageRoutingModule {}
