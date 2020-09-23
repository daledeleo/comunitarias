import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GenerarCampaignPage } from './generar-campaign.page';

const routes: Routes = [
  {
    path: '',
    component: GenerarCampaignPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GenerarCampaignPageRoutingModule {}
