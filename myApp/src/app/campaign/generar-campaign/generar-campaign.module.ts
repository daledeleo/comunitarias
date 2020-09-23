import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GenerarCampaignPageRoutingModule } from './generar-campaign-routing.module';

import { GenerarCampaignPage } from './generar-campaign.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GenerarCampaignPageRoutingModule
  ],
  declarations: [GenerarCampaignPage]
})
export class GenerarCampaignPageModule {}
