import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProveedorPage } from './proveedor.page';

const routes: Routes = [
  {
    path: '',
    component: ProveedorPage
  },
  {
    path: 'generarproveedor',
    loadChildren: () => import('./generarproveedor/generarproveedor.module').then( m => m.GenerarproveedorPageModule)
  },  {
    path: 'editarproveedor',
    loadChildren: () => import('./editarproveedor/editarproveedor.module').then( m => m.EditarproveedorPageModule)
  },
  {
    path: 'detalle-proveedor',
    loadChildren: () => import('./detalle-proveedor/detalle-proveedor.module').then( m => m.DetalleProveedorPageModule)
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProveedorPageRoutingModule {}
