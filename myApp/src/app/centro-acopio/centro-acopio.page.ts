import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router'
import { CentroAcopioService } from "../services/centro-acopio/centro-acopio.service"
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-centro-acopio',
  templateUrl: './centro-acopio.page.html',
  styleUrls: ['./centro-acopio.page.scss'],
})
export class CentroAcopioPage implements OnInit {
  public indice: number = 0;
  public lista: any[] = [];
  public accionEditar: boolean = false;
  public seleccionado: string='';
  public centroAcopio:any[]=[];

  constructor(public activateRoute: ActivatedRoute, 
    private conexionApi: CentroAcopioService,private alertController:AlertController,private router:Router) {
  }

  doRefresh(event:any) {
    console.log('Begin async operation');

    setTimeout(() => {
      console.log('Async operation has ended');
      this.lista=[];
      this.recibiendoDatosApi();
      event.target.complete();
    }, 2000);
  }

  goDetails(id:any){
    this.router.navigate(['./centro-acopio/centro-de-acopio-detalle'], {
      queryParams: {
        centroAcopioId:id,
      }
    })
  }

  checklist() {
    return this.lista.length < 1;
  }

  public recibiendoDatosApi() {
    /* Recibiendo los datos guardados de la api*/
    this.conexionApi.getCentrosAcopios().subscribe(data => {
      data.forEach(f=>{
        this.lista.push(f);
      });
    });
    console.log(this.lista);
  }

  ngOnInit() {
    this.recibiendoDatosApi();
  }

  async presentAlertConfirm(id:any) {
    this.obtenerNombre(id);
    let alert = await this.alertController.create({
      header: 'Confirmación!',
      message: '<strong>Esta seguro que desea eliminar: '+this.seleccionado+'</strong>!!!',
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          cssClass: 'secondary',
          handler: (blah) => {
            console.log('Confirm Cancel: blah');
          }
        }, {
          text: 'Eliminar',
          handler: () => {
            console.log('Confirm Okay');
            console.log(id);
            this.conexionApi.deleteCentroAcopio(id);
          }
        }
      ]
    });
    await alert.present();
  }

  obtenerNombre(id:any){
    this.lista.forEach(data=>{
      if(data['id']==id){
        this.seleccionado=data['name'].toString();
        return;
      }
    });
  }

  obtenerCentroAcopio(id:any){
    this.lista.forEach(data=>{
      if(data['id']==id){
        this.centroAcopio=data;
        return;
      }
    });
  }

  cambiarUbicacion(id:any){
    this.accionEditar=true;
  }

  editar(id:any){
    this.obtenerCentroAcopio(id);
    this.router.navigate(['./centro-acopio/centro-acopio-registro'], {
      queryParams: {
        centroAcopioId:id,
        editar:'1',
      }
    })
  }

}
