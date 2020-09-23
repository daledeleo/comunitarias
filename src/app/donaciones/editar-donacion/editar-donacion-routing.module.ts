import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EditarDonacionPage } from './editar-donacion.page';

const routes: Routes = [
  {
    path: '',
    component: EditarDonacionPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EditarDonacionPageRoutingModule {}
