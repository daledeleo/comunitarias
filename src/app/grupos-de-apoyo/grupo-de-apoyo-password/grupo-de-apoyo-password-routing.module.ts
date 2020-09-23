import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GrupoDeApoyoPasswordPage } from './grupo-de-apoyo-password.page';

const routes: Routes = [
  {
    path: '',
    component: GrupoDeApoyoPasswordPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GrupoDeApoyoPasswordPageRoutingModule {}
