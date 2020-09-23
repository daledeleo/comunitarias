import { Component, OnInit } from '@angular/core';
import { AlertController, NavController, ModalController, PopoverController  } from '@ionic/angular';
import {Router} from '@angular/router';

import { DonacionesService } from '../services/donaciones/donaciones.service';
import {CategoriaService} from '../services/categoria/categoria.service';
import {ProviderService} from '../services/provider/provider.service';
import {CentroAcopioService} from '../services/centro-acopio/centro-acopio.service';

@Component({
  selector: 'app-donaciones',
  templateUrl: './donaciones.page.html',
  styleUrls: ['./donaciones.page.scss'],
})
export class DonacionesPage implements OnInit {
  opcionfiltro='' 
  donaciones
  proveedores
  centrosAcopios

  constructor(public popoverController: PopoverController,
              public navCtrl: NavController,  
              public modalController: ModalController,
              public router: Router,
              public alertController: AlertController,
              public donacionesService:DonacionesService,
              public categoriaservice: CategoriaService,
              public providerservice: ProviderService,
              public centroAcopioservice: CentroAcopioService ) { }

  ngOnInit() {
    
    this.opcionfiltro='';
    this.flitrarpor();
    this.donacionesService.getDonaciones()
    .subscribe(
      (data)=>{this.donaciones=data},
      (error)=>{console.log(error);}
      );
    
      this.providerservice.getProvider()
      .subscribe(
      (data)=>{this.proveedores=data},
      (error)=>{console.log(error)}
      );
  }
  
  flitrarpor(){
    this.centroAcopioservice.getCentrosAcopios()
    .subscribe(
    (data)=>{this.centrosAcopios=data},
    (error)=>{console.log(error)}
    );
  }  
  onChange(filtro){
    this.opcionfiltro=filtro
  }

  doRefresh(event) {
    setTimeout(() => {
      this.ngOnInit();
      event.target.complete();   
    }, 300);
    
  }

  

  cambiarestado(id: string){
  let cont=1;  
  while(cont==1){
    if (cont==1){
      this.donacionesService.CambiarEstadoDonaciones(id).
      subscribe(
        (data)=>{console.log(data); 
                cont=0},
        (error)=>{console.log(error);}
        ); 
    }
    if(cont!=1){  
    console.log("inficio")
    this.ngOnInit();
    console.log("final")
    } 
  }
  }

  deleteDonacion(id: string){
    this.donacionesService.deleteDonaciones(id).
    subscribe(
      (data)=>{console.log(data)},
      (error)=>{console.log(error);}
      );   
    this.ngOnInit();  
      
  }
  


  async presentAlertCambiarestado(id: string) {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',

      header: 'Esta seguro que desea cambiar el estado de esta donacion!',
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
            this.cambiarestado(id)
          }
        }
      ]
    });
    await alert.present();
  }

  async presentAlertElimnarDonacion(id: string) {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',

      header: 'Esta seguro que desea eliminar esta donacion!',
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
            this.deleteDonacion(id)
          }
        }
      ]
    });
    await alert.present();
  }

}
