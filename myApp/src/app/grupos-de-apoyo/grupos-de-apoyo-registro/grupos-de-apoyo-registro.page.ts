import { Component, OnInit } from '@angular/core';
import { LoginService } from '../../services/login/login.service'
import { GrupoService } from '../../services/grupo-service/grupo.service'
import { FormBuilder, Validators, FormGroup } from '@angular/forms'
import { AlertController } from '@ionic/angular';
import { Router, ActivatedRoute } from '@angular/router';
import { CreteByService } from '../../services/create-by.service'
import { GroupMember } from 'src/app/clases/miembros-grupos/group-member';

@Component({
  selector: 'app-grupos-de-apoyo-registro',
  templateUrl: './grupos-de-apoyo-registro.page.html',
  styleUrls: ['./grupos-de-apoyo-registro.page.scss'],
})
export class GruposDeApoyoRegistroPage implements OnInit {
  public registrationFormGrupo: FormGroup;
  public registrationFormUser: FormGroup
  passwordType: string = 'password';
  passwordIcon: string = 'eye-off';
  public edicion: string = '';
  public idGrupoEdicion: string = '';
  public help_members=[];
  
  hideShowPassword() {
    this.passwordType = this.passwordType === 'text' ? 'password' : 'text';
    this.passwordIcon = this.passwordIcon === 'eye-off' ? 'eye' : 'eye-off';
  }

  constructor(private formBuilder:
    FormBuilder, private conexionUser: LoginService,
    private conexionGrupos: GrupoService, public alertController: AlertController,
    private router: Router, private activatedRouter: ActivatedRoute, 
    private createby: CreteByService) {
  }

  opcionEditar() {
    this.activatedRouter.queryParamMap.subscribe(data => {
      this.edicion = data.get('editar');
      if (this.edicion == 'editar') {
        this.idGrupoEdicion = data.get('idGrupo');
        this.conexionGrupos.getGrupoId(this.idGrupoEdicion).subscribe(grupo => {
          this.conexionUser.getUserId(grupo.user).subscribe(user => {
            this.registrationFormGrupo = this.formBuilder.group({
              name: grupo.name,
              user: grupo.user,
            });
            this.registrationFormUser = this.formBuilder.group({
              username: [user.username, [Validators.required, Validators.maxLength(50)]],
              password: [user.password, [Validators.required, Validators.maxLength(100)]],
              email: [user.email, [Validators.required, Validators.maxLength(100)]],
              createBy: [this.createby.getNombre(), [Validators.required, Validators.maxLength(50)]]
            });
          });
        });
      }
    });

  }
  check() {
    return this.registrationFormGrupo.get('name').value == '' ||
      this.registrationFormUser.get('username').value == '' ||
      this.registrationFormUser.get('password').value == '';
  }

  async alertaError(header_msg, msg) {
    const alert = await this.alertController.create({
      header: header_msg,
      message: msg,
      buttons: ['OK']
    });
    await alert.present();
  }

  sendData() {
    let formDataUser = new FormData();
    formDataUser.append('username', this.registrationFormUser.get('username').value);
    formDataUser.append('password', this.registrationFormUser.get('password').value);
    formDataUser.append('email', this.registrationFormUser.get('email').value);
    formDataUser.append('createdBy', this.createby.getNombre());
    if (this.edicion == 'editar') {
      let data;
      this.conexionGrupos.getGrupoId(this.idGrupoEdicion).subscribe(grupo => {
        this.conexionUser.updateUser(formDataUser, grupo.user).subscribe();
        data = {
          "name": this.registrationFormGrupo.get('name').value,
          "createdBy": this.createby.getNombre(),
          "user": grupo.user,
        }
        console.log(data)
        this.conexionGrupos.updateGrupo(data, this.idGrupoEdicion).subscribe(de => {
          this.alertaError('Crear Grupo', 'Grupo creado correctamente');
          this.router.navigateByUrl('/grupos-de-apoyo');
        }, error => {
          this.alertaError('Error', 'Algo salio mal, por favor, intente de nuevo');
        });
      });

    } else {
      this.conexionUser.guardarUsuario(formDataUser).subscribe(
        (data) => {
          let postData = {
            "name": this.registrationFormGrupo.get('name').value,
            'members':this.help_members,
            "createdBy": this.createby.getNombre(),
            "user": data['id'],
          }
          this.conexionGrupos.guardarGrupo(postData).subscribe(
            newTask => {
              this.alertaError('Crear Grupo', 'Grupo creado correctamente');
              this.router.navigateByUrl('/grupos-de-apoyo');
            },
            error => {
              this.alertaError('Error', 'Algo salio mal, por favor, intente de nuevo');
            }
          );
        },
        error => {
          this.alertaError('Error', 'Algo salio mal, por favor, intente de nuevo');
        });
    }
  }

  ngOnInit() {
    this.registrationFormGrupo = this.formBuilder.group({
      name: ['', [Validators.required, Validators.maxLength(100)]],
      user: '',
    });

    this.registrationFormUser = this.formBuilder.group({
      username: ['', [Validators.required, Validators.maxLength(50)]],
      password: ['', [Validators.required, Validators.maxLength(100)]],
      email: ['', [Validators.required, Validators.maxLength(100), Validators.email]],
      createBy: [this.createby.getNombre(), [Validators.required, Validators.maxLength(50)]]
    });
    this.opcionEditar();
  }


}
