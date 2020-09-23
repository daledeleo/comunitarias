import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GenerarContactoPage } from './generar-contacto.page';

const routes: Routes = [
  {
    path: '',
    component: GenerarContactoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GenerarContactoPageRoutingModule {}
