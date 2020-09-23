import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EditarCampaignPage } from './editar-campaign.page';

const routes: Routes = [
  {
    path: '',
    component: EditarCampaignPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EditarCampaignPageRoutingModule {}
