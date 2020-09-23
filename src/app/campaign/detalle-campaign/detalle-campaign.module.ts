import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DetalleCampaignPageRoutingModule } from './detalle-campaign-routing.module';

import { DetalleCampaignPage } from './detalle-campaign.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DetalleCampaignPageRoutingModule
  ],
  declarations: [DetalleCampaignPage]
})
export class DetalleCampaignPageModule {}
