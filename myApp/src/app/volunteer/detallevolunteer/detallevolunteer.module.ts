import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DetallevolunteerPageRoutingModule } from './detallevolunteer-routing.module';

import { DetallevolunteerPage } from './detallevolunteer.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DetallevolunteerPageRoutingModule
  ],
  declarations: [DetallevolunteerPage]
})
export class DetallevolunteerPageModule {}
