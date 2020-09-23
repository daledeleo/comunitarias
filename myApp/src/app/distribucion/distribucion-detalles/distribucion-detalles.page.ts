import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Distribucion } from '../../clases/distribucion/distribucion'
import { DistribucionService } from '../../services/distribucion/distribucion.service'
import { AlertController } from '@ionic/angular';
import { GrupoService } from '../../services/grupo-service/grupo.service'
import { VoluntariosService } from '../../services/voluntarios/voluntarios.service'

@Component({
  selector: 'app-distribucion-detalles',
  templateUrl: './distribucion-detalles.page.html',
  styleUrls: ['./distribucion-detalles.page.scss'],
})
export class DistribucionDetallesPage implements OnInit {

  public idDistribucion: string;
  public distribucion: Distribucion=new Distribucion();
  public booleanPhto: boolean;
  public encargadoNombre:string;
  public encargadoTipo:string;

  constructor(private activateRoute: ActivatedRoute, private conexionGrupos:GrupoService,
    private apiDistribucion: DistribucionService, public alertController: AlertController,
    private conexionVoluntarios:VoluntariosService) { }

  recibiendoDatos() {
    this.activateRoute.queryParamMap.subscribe((data) => {
      this.idDistribucion = data.get('id');

      this.apiDistribucion.getDistribucionId(this.idDistribucion).subscribe(data => {
        this.distribucion = data;
        if(data.manager_type=='1'){
          this.encargadoTipo="Voluntario";
          this.conexionVoluntarios.getVoluntarios().subscribe(voluntarios=>{
            voluntarios.forEach(voluntario=>{
              if(voluntario.user==this.distribucion.user){
                this.encargadoNombre=voluntario.firstName+" "+voluntario.lastName;
                return;
              }
            });
          });
        }else{
          this.encargadoTipo='Grupo';
          this.conexionGrupos.getGrupo().subscribe(grupos=>{
            grupos.forEach(grupo=>{
              if(grupo.user==this.distribucion.user){
                this.encargadoNombre=grupo.name;
                return;
              }
            });
          });
        }


        if (this.distribucion.photo == null) {
          this.booleanPhto = false //no hay foto
        } else {
          this.booleanPhto = true //si hay foto
        }
      }, error => {
        this.presentAlertConfirm(
          'Error!',
          'Hemos tenido un error por favor intentelo mas tarde..'
        );
      });
    });
  }

  async presentAlertConfirm(header: string, message: string) {
    let alert = await this.alertController.create({
      header: header,
      message: '<p><strong>' + message + '</strong>!!!</p>',
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          cssClass: 'secondary',
        },
      ]
    });
    await alert.present();
  }

  ngOnInit() {
    this.recibiendoDatos();
  }



}
