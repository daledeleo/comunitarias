import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { DistribucionService } from '../services/distribucion/distribucion.service';
import { AlertController } from '@ionic/angular';
import { VoluntariosService } from '../services/voluntarios/voluntarios.service'
import { GrupoService } from '../services/grupo-service/grupo.service'
import { Distribucion } from '../clases/distribucion/distribucion';

@Component({
  selector: 'app-distribucion',
  templateUrl: './distribucion.page.html',
  styleUrls: ['./distribucion.page.scss'],
})

export class DistribucionPage implements OnInit {

  public distribucion_registrada: Distribucion[] = [];
  public indice: number = 0;
  public seleccionado: string = '';
  public VOLUNTARIO: string = '1';
  public GRUPO: string = '2';

  constructor(private activateRoute: Router, private conexionApi: DistribucionService
    , private alertController: AlertController, private conexionVoluntaio: VoluntariosService,
    private conexionGrupo: GrupoService, private recibir:ActivatedRoute) {
  }

  doRefresh(event) {
    setTimeout(() => {
      this.ngOnInit();
      event.target.complete();
    }, 200);
  }

  actualizar() {
    setTimeout(() => {
      this.ngOnInit();
      
    }, 200);
  }

  goDetails(idDistribucion:any){
    this.activateRoute.navigate(['./distribucion/distribucion-detalles'], {
      queryParams: {
        id:idDistribucion,
      }
    });
  }

  public recibiendoDatosApi() {
    this.distribucion_registrada=[];
    /* Recibiendo los datos guardados de la api*/
    this.conexionApi.getDistribuciones().subscribe(data => {
      data.forEach(f => {
        if (f.manager_type == this.VOLUNTARIO) {
          this.conexionVoluntaio.getVoluntarios().subscribe(voluntarios => {
            voluntarios.forEach(voluntario => {
              f['manager_type'] = 'Voluntarios';
              if (f.user == voluntario.user) {
                f['user'] = voluntario.firstName;
              }
            });
          });
        } else {
          this.conexionGrupo.getGrupo().subscribe(grupos => {
            grupos.forEach(grupo => {
              f['manager_type'] = 'Grupos';
              if (f.user == grupo.user) {
                f['user'] = grupo.name;
              }
            });
          });
        }
        this.distribucion_registrada.push(f);
      })
    });
  }

  async presentAlertConfirm(id: any) {
    this.obtenerNombre(id);
    let alert = await this.alertController.create({
      header: 'Confirmación!',
      message: '<strong>Esta seguro que desea eliminar la Distribucion de: ' + this.seleccionado + '</strong>!!!',
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
            this.conexionApi.eliminarDistribucion(id);
            this.actualizar();
          }
        }
      ]
    });
    await alert.present();
  }

  obtenerNombre(id: any) {
    this.distribucion_registrada.forEach(data => {
      if (data.id == id) {
        this.seleccionado = data.departureAddress + ' a ' + data.destinationAddress;
        return;
      }
    });
  }

  editar(id: string) {
    this.activateRoute.navigate(['./distribucion/registro-distribucion'], {
      queryParams: {
        accionEditar: "1",
        id: id,
      }
    });
  }

  ngOnInit() {
    this.recibiendoDatosApi();
  }

}
