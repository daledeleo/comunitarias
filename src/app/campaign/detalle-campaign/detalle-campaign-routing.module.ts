import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DetalleCampaignPage } from './detalle-campaign.page';

const routes: Routes = [
  {
    path: '',
    component: DetalleCampaignPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DetalleCampaignPageRoutingModule {}
