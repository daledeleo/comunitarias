import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GenerarvolunteerPageRoutingModule } from './generarvolunteer-routing.module';

import { GenerarvolunteerPage } from './generarvolunteer.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GenerarvolunteerPageRoutingModule
  ],
  declarations: [GenerarvolunteerPage]
})
export class GenerarvolunteerPageModule {}
