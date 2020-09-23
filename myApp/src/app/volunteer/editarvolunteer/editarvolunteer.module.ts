import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EditarvolunteerPageRoutingModule } from './editarvolunteer-routing.module';

import { EditarvolunteerPage } from './editarvolunteer.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EditarvolunteerPageRoutingModule
  ],
  declarations: [EditarvolunteerPage]
})
export class EditarvolunteerPageModule {}
