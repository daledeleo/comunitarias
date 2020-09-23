import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DetallevolunteerPage } from './detallevolunteer.page';

const routes: Routes = [
  {
    path: '',
    component: DetallevolunteerPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DetallevolunteerPageRoutingModule {}
