import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { Router } from '@angular/router';
import {CategoriaService} from '../../services/categoria/categoria.service';
import { LoginService } from 'src/app/services/login/login.service';
import { VoluntariosService } from 'src/app/services/voluntarios/voluntarios.service';
import { GrupoService } from 'src/app/services/grupo-service/grupo.service';

@Component({
  selector: 'app-generar-categoria',
  templateUrl: './generar-categoria.page.html',
  styleUrls: ['./generar-categoria.page.scss'],
})
export class GenerarCategoriaPage implements OnInit {
  formData= new FormData();
  formularios={
  name: '',
  description: '',
  creador:''

  }
  
  categorias: any={};
  gruposApoyos;
  voluntarios;
  idcreador: string;
  creador: string;
  
  constructor(public loginService: LoginService,
              public categoriaservice: CategoriaService,
              public voluntariosvervice: VoluntariosService,
              public gruposervice: GrupoService,
              public alertController: AlertController,
              public router: Router
              ) { }



  ngOnInit() {
    this.idcreador=this.loginService.getUserIdLogin();
    this.gruposervice.getGrupo()
    .subscribe(
    (data)=>{this.gruposApoyos=data;
      for (const iterator of this.gruposApoyos) {
        if (this.idcreador == iterator.user){
          this.formData.append("createdBy", iterator.name)
        }
      }
    },(error)=>{console.log(error)}
    );
    this.voluntariosvervice.getVoluntarios()
    .subscribe(
    (data)=>{this.voluntarios=data;
      for (const iterator of this.voluntarios) {
        if (this.idcreador == iterator.user){
          this.formData.append("createdBy", iterator.firstName+" "+iterator.lastName)
         console.log(iterator.firstName+" "+iterator.lastName);
        }
      }
      
    },(error)=>{console.log(error)}
    ); 

  }

  async alertaError(header_msg, msg) {
    const alert = await this.alertController.create({
      header: header_msg,
      message: msg,
      buttons: ['OK']
    });
    await alert.present();
  }

  postCategorias(){
    
    this.formData.append("name",this.formularios.name);
    this.formData.append("description",this.formularios.description);
    this.formData.append("createdBy", localStorage.getItem('USER_NAME'));

    this.categoriaservice.postCategorias(this.formData).subscribe(
      data => {
        this.alertaError('Crear categoria', 'Categoria creada correctamente.');
        this.router.navigateByUrl('/categoria');
      },
      error => {
        this.alertaError('Error al crear nueva categoria', 'Algo salio mal, por favor, intente de nuevo');
        this.router.navigateByUrl('/categoria');
      }
    );
    }
}
