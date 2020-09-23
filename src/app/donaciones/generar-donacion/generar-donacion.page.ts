import { Component, OnInit } from '@angular/core';
import { DatePipe } from "@angular/common";
import { AlertController } from '@ionic/angular';
import {Router} from '@angular/router';
import { DonacionesService } from '../../services/donaciones/donaciones.service';
import {CategoriaService} from '../../services/categoria/categoria.service';
import {ProviderService} from '../../services/provider/provider.service';
import {CentroAcopioService} from '../../services/centro-acopio/centro-acopio.service';
import {VoluntariosService} from '../../services/voluntarios/voluntarios.service';
import {GrupoService} from '../../services/grupo-service/grupo.service';
import { LoginService } from 'src/app/services/login/login.service';


@Component({
  selector: 'app-generar-donacion',
  templateUrl: './generar-donacion.page.html',
  styleUrls: ['./generar-donacion.page.scss'],
})

export class GenerarDonacionPage implements OnInit {
  imageSrc;
  donaciones;
  centrosAcopios;
  providers;
  categorias;
  photo: File;
  voluntarios;
  gruposApoyos;

  formData= new FormData();
  users:[any]
  formularios={
    voluntario:[],
    grupoapoyo:[], 
    photo: '',
    description: '',
    proveedor:'',
    centroacopio:'',
    categoria:'',
    BeginDate:'',
    ExpirationDate:'',
    }
  idcreador: string;

  constructor(public router: Router,
              private datePipe: DatePipe,
              public alertController: AlertController,
              public donacionesService:DonacionesService,
              public categoriaservice: CategoriaService,
              public providerservice: ProviderService,
              public centroAcopioservice: CentroAcopioService,
              public voluntariosvervice: VoluntariosService,
              public loginService: LoginService,
              public gruposervice: GrupoService ) { }

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
    
    this.providerservice.getProvider()
    .subscribe(
    (data)=>{this.providers=data},
    (error)=>{console.log(error)}
    );

    this.centroAcopioservice.getCentrosAcopios()
    .subscribe(
    (data)=>{this.centrosAcopios=data},
    (error)=>{console.log(error)}
    );
  }

  postDonaciones(){
    this.formData.append("description",this.formularios.description) 
    this.formData.append("photo",this.photo) 
    if(this.formularios.BeginDate.length>0){
      this.formData.append('beginDate',this.datePipe.transform(this.formularios.BeginDate,"yyyy-MM-dd"))   
    }else{
      const fecha= new Date()
      const fechastr =this.datePipe.transform(fecha,"yyyy-MM-dd")
      this.formData.append('beginDate',fechastr)
    }

    if(this.formularios.ExpirationDate.length>0){
      this.formData.append('expirationDate',this.datePipe.transform(this.formularios.ExpirationDate,"yyyy-MM-dd"))
    }
    
    this.formData.append("provider", this.formularios.proveedor)
    this.formData.append("collectionCenter", this.formularios.centroacopio)
    this.formData.append("category", this.formularios.categoria)

    if(this.formularios.voluntario.length > 0 || this.formularios.grupoapoyo.length>0){
      
      let user = this.formularios.voluntario.concat(this.formularios.grupoapoyo)
      for (let index = 0; index < user.length; index++) {
        this.formData.append('users', user[index]);      
      }

      this.donacionesService.postDonaciones(this.formData).subscribe(
      (newTask)=>{console.log(newTask);}
      );

      this.router.navigateByUrl('/donaciones');
    }
    else{
      this.presentAlert()
    }
    
  }

  changeListener($event) : void {
    this.photo = $event.target.files[0];
  }

  readURL(event): void {
    if (event.target.files && event.target.files[0]) {
        const file = event.target.files[0];
        this.photo = event.target.files[0];
        this.formData.append("photo",this.photo)

        const reader = new FileReader();
        reader.onload = e => this.imageSrc = reader.result;

        reader.readAsDataURL(file);
    }
  }

  removePic() {
    this.imageSrc = null;
  }

  async presentAlert() {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',

      header: 'Debe seleccionar al menos un voluntario o un grupo de apoyo como responsable!',
      buttons: [
        {
          text: 'ok',
          role: 'ok',
          cssClass: 'secondary',
          handler: (blah) => {
          }
        }
      ]
    });
    await alert.present();
  }

}
