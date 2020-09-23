import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { FormBuilder, Validators, FormGroup } from '@angular/forms'
import { Router, ActivatedRoute } from '@angular/router';
import { GrupoService } from '../../services/grupo-service/grupo.service';
import { LoginService } from '../../services/login/login.service'

@Component({
  selector: 'app-grupo-de-apoyo-password',
  templateUrl: './grupo-de-apoyo-password.page.html',
  styleUrls: ['./grupo-de-apoyo-password.page.scss'],
})
export class GrupoDeApoyoPasswordPage implements OnInit {
  public opcion: string = '';
  public formGroupContrasenia: FormGroup;
  public idGrupoEdicion: string = '';
  passwordType: string = 'password';
  passwordIcon: string = 'eye-off';

  passwordType2: string = 'password';
  passwordIcon2: string = 'eye-off';

  public passwordFinal:string;
  public bandera:boolean=true;


  constructor(public alertController: AlertController, private formBuilder:
    FormBuilder, private activatedRouter: ActivatedRoute, private conexionGrupos: GrupoService,
    private conexionUser: LoginService, private router: Router) { }

  hideShowPassword() {
    this.passwordType = this.passwordType === 'text' ? 'password' : 'text';
    this.passwordIcon = this.passwordIcon === 'eye-off' ? 'eye' : 'eye-off';
  }

  hideShowPassword2() {
    this.passwordType2 = this.passwordType2 === 'text' ? 'password' : 'text';
    this.passwordIcon2 = this.passwordIcon2 === 'eye-off' ? 'eye' : 'eye-off';
  }

  checkPassword() {
    if (this.formGroupContrasenia.get('currentPassword').value ==
      this.formGroupContrasenia.get('newPassword').value) {
      return true;
    }
    this.presentAlert("<strong>Las contraseñas no coinciden</strong>");
    return false;
  }

  async presentAlert(mensaje: string) {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Error',
      subHeader: 'Especificacion del error',
      message: mensaje,
      buttons: ['Aceptar']
    });

    await alert.present();
  }

  async presentExito(mensaje: string) {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Exito',
      subHeader: 'Detalle',
      message: mensaje,
      buttons: ['Aceptar']
    });

    await alert.present();
  }


  atras() {
    this.router.navigate(['./grupos-de-apoyo/grupo-de-apoyo-detalles'], {
      queryParams: {
        idGrupo: this.idGrupoEdicion,
      }
    });
  }

  crearFormContrasenia() {
    this.formGroupContrasenia = this.formBuilder.group({
      currentPassword: ['', [Validators.required, Validators.maxLength(100)]],
      newPassword: ['', [Validators.required, Validators.maxLength(100)]],
      newPassword2: ['', [Validators.required, Validators.maxLength(100)]],//para reestablecer password
    });
  }


  opcionesContrasenia() {
    this.crearFormContrasenia();
    this.activatedRouter.queryParamMap.subscribe(data => {
      this.idGrupoEdicion = data.get('grupoId');
      this.opcion = data.get('opcion');
      
    });
  }

  checkBandera(){
    return this.bandera;
  }
  ngOnInit() {
    this.opcionesContrasenia();
  }

  enviarDatos() {
    if (this.idGrupoEdicion != null) {

      //cambio de contraseña
      if (this.opcion == 'cambio') {
        this.conexionGrupos.getGrupoId(this.idGrupoEdicion).subscribe(grupo => {
          this.conexionUser.getUserId(grupo.user).subscribe(user => {
            console.log(user)
            console.log("ww"+this.formGroupContrasenia.get('currentPassword').value)
            if(this.formGroupContrasenia.get('currentPassword').value=='' ){
             
            }else if(this.formGroupContrasenia.get('currentPassword').value!=null &&
            this.formGroupContrasenia.get('newPassword').value!=null){
              console.log(user.password);
              let data={
                currentpassword:this.formGroupContrasenia.get('currentPassword').value,
                password:this.formGroupContrasenia.get('newPassword').value
              }
              this.conexionUser.updateUser(data,user.id).subscribe(exito=>{
                this.presentExito("La contraseña se ha modificado correctamente..");
                this.atras();
              },error=>{
                this.presentAlert(':( ..No se pudo actualizar la contraseña del usuario: '
                +user.username+' porfavor intente mas tarde..');
              })
            }else{
              this.presentAlert('La contraseña no coincide con la actual');
              this.bandera=true;
            }
          });
        });
      }
      
      //resstablacer contraseña
      else if (this.opcion == 'reestablecer') {
        this.passwordFinal=this.formGroupContrasenia.get('newPassword2').value;
        this.conexionGrupos.getGrupoId(this.idGrupoEdicion).subscribe(grupo=>{
          let dataUser={
            password:this.formGroupContrasenia.get('newPassword2').value
          }
          this.conexionUser.updateUser(dataUser,grupo.user).subscribe(ok=>{
            this.presentExito("Cambio realizado con exito");
            this.atras();
          },error=>{
            this.presentAlert('Error en reestablecer contraseña');
          });
        });
        this.bandera=false;
      } else {
        this.opcion = '';
      }
    
    }
  }

}
