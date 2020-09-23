import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { VoluntariosService } from 'src/app/services/voluntarios/voluntarios.service';
import { ActivityService } from 'src/app/services/activity/activity.service';
import { LoginService } from 'src/app/services/login/login.service';
import { GrupoService } from 'src/app/services/grupo-service/grupo.service';
import { UserService } from 'src/app/services/user/user.service';
import { Voluntario } from 'src/app/clases/voluntario/voluntario';
import { User } from 'src/app/clases/user/user';

@Component({
  selector: 'app-editarvolunteer',
  templateUrl: './editarvolunteer.page.html',
  styleUrls: ['./editarvolunteer.page.scss'],
})
export class EditarvolunteerPage implements OnInit {

  activities;
  idcreador: string;
  formularios={
    activities:[], 
    firstName: '',
    lastName: '',
    social:'',
    schedule:'',
    phoneNumber:'',
    email:'',
    username:''
  }

    formDataUser = new FormData();
    formDataVoluntario = new FormData();
  id: string;
  public volunteer: Voluntario=new Voluntario();
  
  public users: User= new User();
  activities_selected = [];

  constructor(public router: Router,
              private activateRoute: ActivatedRoute,
              public alertController: AlertController,
              private cdRef : ChangeDetectorRef,
              public voluntariosService: VoluntariosService,
              public activityService: ActivityService,
              private conexionUser: LoginService,
              private userservice: UserService,
  ) {     
    this.activateRoute.paramMap.subscribe(paramMap => {
      const voluntario = paramMap.get('id')
      
      this.id = voluntario
      
      this.voluntariosService.getVoluntarioId(voluntario).subscribe((data)=>{this.volunteer=data;
        this.activities_selected = []; 
        // this.activities = []; 
        for ( let num of data.activities){
          this.activities_selected.push(num.toString());
          //let i = 0; i < data.activities.length; i++) {
          //this.activities.push(data.activities[i].id);
          //this.activityService.getActivityId(data.activities[i]).subscribe(
          //  data => this.activities_selected.push(data),
          //  error => console.log(error)
         // )
        }
        this.userservice.getUserId(data.user).subscribe(
          (data)=>{this.users=data},
          (error)=>{console.log(error)}
        )             
      },
      (error)=>{console.log(error);}
      )
    }); 
    console.log(this.volunteer) 
  }

  ngOnInit() {
    this.activityService.getActivity()
    .subscribe(
    (data)=>{this.activities=data},
    (error)=>{console.log(error)}
    );

    this.conexionUser.getUserId
  }

  ngAfterContentChecked() {
    this.cdRef.detectChanges();
  }

  UpDatevolunteer(idUser:string){
    this.formDataUser.append('username', this.formularios.username);
    this.formDataUser.append('email', this.formularios.email);

    this.formDataVoluntario.append('firstName', this.formularios.firstName);
    this.formDataVoluntario.append('lastName',  this.formularios.lastName);
    this.formDataVoluntario.append('social', this.formularios.social);
    this.formDataVoluntario.append('schedule', this.formularios.schedule);
    this.formDataVoluntario.append('phoneNumber', this.formularios.phoneNumber);
    for (let index = 0; index <  this.formularios.activities.length; index++) {
      this.formDataVoluntario.append('activities',  this.formularios.activities[index]);      
    }

    this.conexionUser.updateUser(this.formDataUser,idUser).subscribe(
      newTask => {
        this.guardarvoluntario();
      },
      error => {
        this.presentAlert('El nombre del usuario o correo ya existe, por favor <strong>eliga otro nombre</strong>');
      }
    );
  }
  guardarvoluntario(){
    this.voluntariosService.updateVoluntario(this.formDataVoluntario,this.id).subscribe(
      newTask => {
        console.log(newTask);
        this.router.navigateByUrl('/volunteer');
      },
      error => {
        console.log(error);
      }
    );

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

}
