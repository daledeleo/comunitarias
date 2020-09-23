import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GenerarproveedorPage } from './generarproveedor.page';

const routes: Routes = [
  {
    path: '',
    component: GenerarproveedorPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GenerarproveedorPageRoutingModule {}
