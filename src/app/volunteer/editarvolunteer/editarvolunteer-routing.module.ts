import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EditarvolunteerPage } from './editarvolunteer.page';

const routes: Routes = [
  {
    path: '',
    component: EditarvolunteerPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EditarvolunteerPageRoutingModule {}
