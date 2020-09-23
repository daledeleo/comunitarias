import { Component, OnInit } from '@angular/core';
import { Grupo } from '../clases/grupo/grupo'
import { GrupoService } from '../services/grupo-service/grupo.service'
import { LoginService } from '../services/login/login.service'
import { AlertController } from '@ionic/angular';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-grupos-de-apoyo',
  templateUrl: './grupos-de-apoyo.page.html',
  styleUrls: ['./grupos-de-apoyo.page.scss'],
})
export class GruposDeApoyoPage implements OnInit {
  public gruposDeApoyo: Grupo[] = [];
  public seleccionado: string = '';
  public getted = false;

  constructor(private apiGrupoApoyo: GrupoService, private apiUser: LoginService,
    private alertController: AlertController, private router: Router) {


  }

  ngOnInit() {
      this.obtenerGruposdeapoyo(); // ejecutar ngOnInit al cargar pagina
    }

  async presentAlertConfirm(id: any) {
    this.obtenerNombre(id);
    let alert = await this.alertController.create({
      header: 'Confirmación!',
      message: '<p>Esta seguro que desea eliminar: <strong>' + this.seleccionado + '</strong>!!!</p>',
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
            this.apiGrupoApoyo.deleteGrupo(id);
            this.obtenerGruposdeapoyo();
          }
        }
      ]
    });
    await alert.present();
  }

  obtenerNombre(id: string) {
    this.gruposDeApoyo.forEach(grupo => {
      if (grupo.id == id) {
        this.seleccionado = grupo.name;
      }
    });
  }

  editar(id: string) {
    this.router.navigate(['./grupos-de-apoyo/grupos-de-apoyo-registro'], {
      queryParams: {
        idGrupo: id,
        editar: 'editar',
      }
    });
  }
  obtenerGruposdeapoyo() {
    this.gruposDeApoyo = [];
    this.apiGrupoApoyo.getGrupo().subscribe(grupos => {
      grupos.forEach(grupo => {
        this.apiUser.getLogins().subscribe(users => {
          users.forEach(user => {
            if (user.id == grupo.user) {
              grupo.nombreuser = user.username;
              return;
            }
          });
        });
        this.gruposDeApoyo.push(grupo);
      });
    });
  }

  doRefresh(event) {
    setTimeout(() => {
      this.obtenerGruposdeapoyo();
      event.target.complete();
    }, 200);
  }



  goDetails(id: string) {
    this.router.navigate(['./grupos-de-apoyo/grupo-de-apoyo-detalles'], {
      queryParams: {
        idGrupo: id
      }
    });
  }


}
