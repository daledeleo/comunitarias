import { Component } from '@angular/core';
import { AlertController, MenuController } from '@ionic/angular';

@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss']
})
export class TabsPage {

  constructor(public menu: MenuController) {
    this.menu.enable(false);
  }

}
