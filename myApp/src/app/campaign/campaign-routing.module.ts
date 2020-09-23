import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CampaignPage } from './campaign.page';

const routes: Routes = [
  {
    path: '',
    component: CampaignPage
  },
  {
    path: 'generar-campaign',
    loadChildren: () => import('./generar-campaign/generar-campaign.module').then( m => m.GenerarCampaignPageModule)
  },
  {
    path: 'editar-campaign',
    loadChildren: () => import('./editar-campaign/editar-campaign.module').then( m => m.EditarCampaignPageModule)
  },
  {
    path: 'detalle-campaign',
    loadChildren: () => import('./detalle-campaign/detalle-campaign.module').then( m => m.DetalleCampaignPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CampaignPageRoutingModule {}
