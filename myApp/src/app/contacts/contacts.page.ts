import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';


@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.page.html',
  styleUrls: ['./contacts.page.scss'],
})


export class ContactsPage implements OnInit {
          
  constructor(private menu: MenuController) { }

  ngOnInit() {
  }
  async openMenu() {
    await this.menu.open();
  }

}
 
 
