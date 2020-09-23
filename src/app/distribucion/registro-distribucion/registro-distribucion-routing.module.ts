import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RegistroDistribucionPage } from './registro-distribucion.page';

const routes: Routes = [
  {
    path: '',
    component: RegistroDistribucionPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RegistroDistribucionPageRoutingModule {}
