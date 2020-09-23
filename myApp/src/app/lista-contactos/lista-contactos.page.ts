import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { ProviderService } from '../services/provider/provider.service';
import { Router, ActivatedRoute } from '@angular/router';
import { ListaContactosService } from '../services/lista-contactos/lista-contactos.service';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-lista-contactos',
  templateUrl: './lista-contactos.page.html',
  styleUrls: ['./lista-contactos.page.scss'],
})
export class ListaContactosPage implements OnInit {
  id: any;
  provider;
  contactos;

  constructor(public providerservice: ProviderService,
    public router: Router,
    private cdRef : ChangeDetectorRef,
    public alertController: AlertController,
    private activateRoute: ActivatedRoute,
    public listacontactosService: ListaContactosService) { }

  ngOnInit() {
    this.activateRoute.paramMap.subscribe(paramMap => {
      const Id = paramMap.get('id')
      this.id = Id
    });
    
    this.listacontactosService.getContactos()
    .subscribe(
      (data)=>{this.contactos=data;},
      (error)=>{console.log(error);}
      )
  }
  generarcontacto(){
    this.router.navigateByUrl("generar-contactos/"+this.id);
  }
  editarcontacto(id:string){
    this.router.navigateByUrl("generar-contactos/"+id);
  }

  dirigirpantalla(){
    this.router.navigateByUrl("provider/detalleproveedor/"+this.id);
  }

  deleteContacto(id: string){
    this.listacontactosService.deleteContactos(id).
    subscribe(
      (data)=>{console.log(data);
               this.ngOnInit();},
      (error)=>{console.log(error);}
      );        
  }

  async presentAlertElimnarContacto(id: string) {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',

      header: 'Esta seguro que desea eliminar este contacto!',
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
            this.deleteContacto(id)
          }
        }
      ]
    });
    await alert.present();
  }


  doRefresh(event) {
    setTimeout(() => {
      this.ngOnInit();
      event.target.complete();   
    }, 200);
  }

  

}
