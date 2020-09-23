import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { VoluntariosService } from 'src/app/services/voluntarios/voluntarios.service';
import { LoginService } from 'src/app/services/login/login.service';
import { GrupoService } from 'src/app/services/grupo-service/grupo.service';
import { ListaContactosService } from 'src/app/services/lista-contactos/lista-contactos.service';

@Component({
  selector: 'app-generar-contacto',
  templateUrl: './generar-contacto.page.html',
  styleUrls: ['./generar-contacto.page.scss'],
})
export class GenerarContactoPage implements OnInit {

  formularios={
    
    firstName: '',
    lastName: '',
    social:'',
    phoneNumber:''
   
    }

  voluntarios;
  gruposApoyos;

  formData = new FormData();
  idcreador: string;
  id: string;

  constructor(public router: Router,
    public alertController: AlertController,
    public voluntariosService: VoluntariosService,
    private conexionUser: LoginService,
    public gruposervice: GrupoService,
    private activateRoute: ActivatedRoute,
    public listacontactosService: ListaContactosService) {
      this.activateRoute.paramMap.subscribe(paramMap => {
        const Id = paramMap.get('id')
        this.id = Id
      });
     }

  ngOnInit() {



    this.idcreador=this.conexionUser.getUserIdLogin();
    this.gruposervice.getGrupo()
    .subscribe(
    (data)=>{this.gruposApoyos=data;
      for (const iterator of this.gruposApoyos) {
        if (this.idcreador == iterator.user){
          this.formData.append("createdBy", iterator.name)
          
        }
      }
    },
    (error)=>{console.log(error)}
    );

    this.voluntariosService.getVoluntarios()
    .subscribe(
    (data)=>{this.voluntarios=data;
      for (const iterator of this.voluntarios) {
        if (this.idcreador == iterator.user){
          this.formData.append("createdBy", iterator.firstName+" "+iterator.lastName)
        }
      }
    },
    (error)=>{console.log(error)}
    );
  }

  postContacto(){
    this.formData.append('firstName', this.formularios.firstName);
    this.formData.append('lastName',  this.formularios.lastName);
    this.formData.append('social', this.formularios.social);
    this.formData.append('phoneNumber', this.formularios.phoneNumber);
    this.formData.append('provider', this.id);

    this.listacontactosService.postContactos(this.formData)
      .subscribe( 
        (newTask)=>{console.log("metodo create")}
      );
      this.router.navigateByUrl("lista-contactos/"+this.id);

  }

}
