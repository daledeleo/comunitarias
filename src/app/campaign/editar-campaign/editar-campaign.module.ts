import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EditarCampaignPageRoutingModule } from './editar-campaign-routing.module';

import { EditarCampaignPage } from './editar-campaign.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EditarCampaignPageRoutingModule
  ],
  declarations: [EditarCampaignPage]
})
export class EditarCampaignPageModule {}
