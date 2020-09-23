import { Component, OnInit } from '@angular/core';
import { ProviderService } from 'src/app/services/provider/provider.service';
import {Router} from '@angular/router';
import { VoluntariosService } from 'src/app/services/voluntarios/voluntarios.service';
import { LoginService } from 'src/app/services/login/login.service';
import { GrupoService } from 'src/app/services/grupo-service/grupo.service';
import { CategoriaService } from 'src/app/services/categoria/categoria.service';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-generarproveedor',
  templateUrl: './generarproveedor.page.html',
  styleUrls: ['./generarproveedor.page.scss'],
})
export class GenerarproveedorPage implements OnInit {
    formularios={
    name: '',
    address: '',
    phoneNumber:'',
    email:'',
    categories:[]
    };
    formData= new FormData();

    categorias;
    provider=[];
    id:string;
    idcreador: string;
    voluntarios;
    gruposApoyos;
    
    providers: any ={};
    constructor(public providerservice: ProviderService,
                public router: Router,
                public categoriaservice: CategoriaService,
                public voluntariosvervice: VoluntariosService,
                public loginService: LoginService,
                public alertController: AlertController,
                public gruposervice: GrupoService) { }

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
      },
      (error)=>{console.log(error)}
      );
  
      this.voluntariosvervice.getVoluntarios()
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

      this.categoriaservice.getCategorias()
      .subscribe(
      (data)=>{this.categorias=data},
      (error)=>{console.log(error)}
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

  postProvider() {

    this.formData.append("name", this.formularios.name)
    this.formData.append("address", this.formularios.address)
    this.formData.append("phoneNumber", this.formularios.phoneNumber)
    this.formData.append("email", this.formularios.email)
    this.formData.append("createdBy", localStorage.getItem('USER_NAME'));
    for (let index = 0; index <  this.formularios.categories.length; index++) {
      this.formData.append('categories',  this.formularios.categories[index]);      
    }
    
    this.providerservice.postProvider(this.formData).subscribe(
      data => {
        this.alertaError('Crear proveedor', 'Proveedor creado correctamente.');
        this.router.navigateByUrl('/provider');
      },
      error => {
        this.alertaError('Error', 'Algo salio mal, por favor, intente de nuevo');
        this.router.navigateByUrl('/provider');
      }
    );
  
    }
}

