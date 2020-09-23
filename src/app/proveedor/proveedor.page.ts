import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { ProviderService} from '../services/provider/provider.service';
import { ActivatedRoute } from '@angular/router';
import { $$ } from 'protractor';


@Component({
  selector: 'app-proveedor',
  templateUrl: './proveedor.page.html',
  styleUrls: ['./proveedor.page.scss'],
})
export class ProveedorPage implements OnInit {

  providers

  constructor(public alertController: AlertController,
            route: ActivatedRoute,
              public providerservice:ProviderService) {
    route.params.subscribe(val => {
      this.ngOnInit(); // ejecutar ngOnInit al cargar pagina
    })
   }

  ngOnInit() {
    this.providerservice.getProvider()
    .subscribe(
      (data)=>{this.providers=data},
      (error)=>{console.log(error);}
      );
     
    
  }
    deleteProvider(id: string){
      this.providerservice.deleteProvider(id).
      subscribe(
        (data)=>{console.log(data);
          this.ngOnInit();},
        (error)=>{console.log(error);}
        );   
      
    }



    doRefresh(event) {
      setTimeout(() => {
        this.ngOnInit();
        event.target.complete();   
      }, 200);
    }

  async presentAlertElimnarProvider(id: string) {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',

      header: 'Esta seguro que desea eliminar esta provider!',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
          handler: (blah) => {
            console.log('Confirm Cancel: blah');
          }
        }, {
          text: 'Ok',
          handler: () => {
            console.log('Confirm Okay');
            this.deleteProvider(id)
          }
        }
      ]
    });
    await alert.present();
  }
  

}
