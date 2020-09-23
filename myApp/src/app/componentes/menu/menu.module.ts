import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MenuComponent } from './menu.component';
import{ ListaMenuComponentModule} from './lista-menu/lista-menu.module'


@NgModule({
  imports: [ CommonModule, FormsModule, IonicModule, ListaMenuComponentModule],
  declarations: [MenuComponent],
  exports: [MenuComponent],
  entryComponents:[]
})
export class MenuComponentModule {}