import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GenerarvolunteerPage } from './generarvolunteer.page';

const routes: Routes = [
  {
    path: '',
    component: GenerarvolunteerPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GenerarvolunteerPageRoutingModule {}
