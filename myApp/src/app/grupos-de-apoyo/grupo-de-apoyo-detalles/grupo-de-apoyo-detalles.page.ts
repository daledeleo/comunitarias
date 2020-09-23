import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router'
import { GrupoService } from '../../services/grupo-service/grupo.service'
import { LoginService } from '../../services/login/login.service'
import { GroupMemberServiceService } from '../../services/group-member/group-member-service.service'
import { Grupo } from '../../clases/grupo/grupo';
import { GroupMember } from '../../clases/miembros-grupos/group-member'
import { Router } from '@angular/router';
import { AlertController, ToastController } from '@ionic/angular';

@Component({
  selector: 'app-grupo-de-apoyo-detalles',
  templateUrl: './grupo-de-apoyo-detalles.page.html',
  styleUrls: ['./grupo-de-apoyo-detalles.page.scss'],
})
export class GrupoDeApoyoDetallesPage implements OnInit {

  public idGrupo: string = '';
  public miembros: GroupMember[] = [];
  public grupo: Grupo = new Grupo();
  public nombreUser: string = '';

  constructor(private navegacion: ActivatedRoute, private apiUser: LoginService
    , private conexionGrupo: GrupoService, private router: Router,
    private alertController: AlertController, 
    private conexionGroupMembers: GroupMemberServiceService, 
    public toastController: ToastController) { }

  
  ngOnInit() {
    this.ionViewDidLoad();
  }

  cambiardecontrasenia(id: string) {
    
    this.router.navigate(['./grupos-de-apoyo/grupo-de-apoyo-password'], {
      queryParams: {
        grupoId: id,
        opcion: 'cambio',
      }
    });
  }

  reestablecerContrasenia(id: string) {
    this.router.navigate(['./grupos-de-apoyo/grupo-de-apoyo-password'], {
      queryParams: {
        grupoId: id,
        opcion: 'reestablecer'
      }
    });
  }

  async presentAlertConfirm(idMember: any) {
    let seleccionado: string;
    this.miembros.forEach(miembro => {
      if (miembro.id == idMember) {
        seleccionado = miembro.firstName + ' ' + miembro.lastName;
      }
    });
    let alert = await this.alertController.create({
      header: 'Confirmación!',
      message: '<p>Esta seguro que desea eliminar: <strong>' + seleccionado + '</strong>!!!</p>',
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
            this.conexionGroupMembers.deleteGrupoMember(idMember);
            let miembrosF: GroupMember[] = [];
            this.miembros.forEach(miembro => {
              if (miembro.id != idMember) {
                miembrosF.push(miembro);
              }
            });
            this.conexionGrupo.getGrupoId(this.idGrupo).subscribe(grupo => {
              grupo.members = miembrosF;
              this.conexionGrupo.updateGrupo(grupo, this.idGrupo).subscribe();
            });
            this.presentToast();
          }
        }
      ]
    });
    await alert.present();
  }

  async presentToast() {
    const toast = await this.toastController.create({
      message: 'eliminacion Exitosa',
      duration: 2000
    });
    toast.present();
    this.ngOnInit();
  }

  ionViewDidLoad() {
    this.navegacion.queryParamMap.subscribe(datos => {
      this.idGrupo = datos.get('idGrupo');
      this.conexionGrupo.getGrupoId(this.idGrupo).subscribe(grupoc => {
        this.grupo = grupoc;
        this.miembros = grupoc.members;
        this.apiUser.getUserId(grupoc.user).subscribe(user => {
          this.nombreUser = user.username;
        });
      });
    });

  }

  irARegistro(id: string) {
    this.router.navigate(['./grupos-de-apoyo/grupo-de-apoyo-ingresar-miembros'], {
      queryParams: {
        grupoId: id,
      }
    });
  }

  opcionEditar(idMiembro: string, idGrupo: string) {
    this.router.navigate(['./grupos-de-apoyo/grupo-de-apoyo-ingresar-miembros'], {
      queryParams: {
        miembroId: idMiembro,
        editar: 'editar',
        grupoId: idGrupo,
      }
    });
  }

}
