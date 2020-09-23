import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GruposDeApoyoRegistroPage } from './grupos-de-apoyo-registro.page';

const routes: Routes = [
  {
    path: '',
    component: GruposDeApoyoRegistroPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GruposDeApoyoRegistroPageRoutingModule {}
