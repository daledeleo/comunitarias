import { Component } from '@angular/core';
import { AlertController, MenuController } from '@ionic/angular';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

  constructor(public menu: MenuController) {
    this.menu.enable(false);
  }

}
