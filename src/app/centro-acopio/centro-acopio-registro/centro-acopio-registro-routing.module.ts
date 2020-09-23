import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CentroAcopioRegistroPage } from './centro-acopio-registro.page';

const routes: Routes = [
  {
    path: '',
    component: CentroAcopioRegistroPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CentroAcopioRegistroPageRoutingModule {}
