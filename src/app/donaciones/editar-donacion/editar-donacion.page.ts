import { Component, OnInit, ChangeDetectorRef} from '@angular/core';
import { DatePipe } from "@angular/common";
import {ActivatedRoute, Router } from '@angular/router';
import { DonacionesService } from '../../services/donaciones/donaciones.service';
import {CategoriaService} from '../../services/categoria/categoria.service';
import {ProviderService} from '../../services/provider/provider.service';
import {CentroAcopioService} from '../../services/centro-acopio/centro-acopio.service';
import {VoluntariosService} from '../../services/voluntarios/voluntarios.service';
import {GrupoService} from '../../services/grupo-service/grupo.service';
import { AlertController } from '@ionic/angular';
import {Donacion} from '../../interfaces/donacion';



@Component({
  selector: 'app-editar-donacion',
  templateUrl: './editar-donacion.page.html',
  styleUrls: ['./editar-donacion.page.scss'],
})
export class EditarDonacionPage implements OnInit {
  imageSrc;
  id: string;
  
  public donaciones: Donacion=new Donacion();
  responsable_selected = [];
  centrosAcopios;
  providers;
  categorias;
  photo: File;
  voluntarios;
  gruposApoyos;
  
  formData= new FormData();
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
    createdBy: ''
    }
  

  constructor(public router: Router,
              private datePipe: DatePipe,
              public alertController: AlertController,
              private activateRoute: ActivatedRoute,
              private cdRef : ChangeDetectorRef,
              public donacionesService:DonacionesService,
              public categoriaservice: CategoriaService,
              public providerservice: ProviderService,
              public centroAcopioservice: CentroAcopioService,
              public voluntariosvervice: VoluntariosService,
              public gruposervice: GrupoService) { 
                this.activateRoute.paramMap.subscribe(paramMap => {
                  const donaciones = paramMap.get('id')
                  this.id = donaciones
                  this.donacionesService.getDonacionesId(donaciones)
                  .subscribe(
                    (data)=>{ this.donaciones=data;
                              this.responsable_selected = []; 
                              for ( let num of data.users){
                                this.responsable_selected.push(num.toString());
                              }
                            },(error)=>{console.log(error);}
                  )
                });  
              }
  ngAfterContentChecked() {
    this.cdRef.detectChanges();
  }


  ngOnInit() {   
    this.gruposervice.getGrupo()
    .subscribe(
    (data)=>{this.gruposApoyos=data},
    (error)=>{console.log(error)}
    );

    this.voluntariosvervice.getVoluntarios()
    .subscribe(
    (data)=>{this.voluntarios=data},
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

    
    if(this.formularios.BeginDate.length>0){
      this.formData.append('beginDate',this.datePipe.transform(this.formularios.BeginDate,"yyyy-MM-dd"))
      console.log(this.formularios.BeginDate)
    }
    
    if(this.formularios.ExpirationDate.length>0){
      this.formData.append('expirationDate',this.datePipe.transform(this.formularios.ExpirationDate,"yyyy-MM-dd"))
    }
    
    this.formData.append("provider", this.formularios.proveedor)
    this.formData.append("collectionCenter", this.formularios.centroacopio)
    this.formData.append("category", this.formularios.categoria)
    if(this.formularios.voluntario.length > 0 || this.formularios.grupoapoyo.length>0){


      for (let index = 0; index < this.formularios.voluntario.length; index++) {
        this.formData.append('users', this.formularios.voluntario[index]);      
      }
      for (let index = 0; index < this.formularios.grupoapoyo.length; index++) {
        this.formData.append('users', this.formularios.grupoapoyo[index]);      
      }
  

    this.donacionesService.updateDonaciones(this.formData,this.id).subscribe(
      (newTask)=>{console.log(newTask);}
    );
    this.router.navigateByUrl('/donaciones');
    }else{
      this.presentAlert()
    }
  }

  changeListener($event) : void {
    this.photo = $event.target.files[0];
    this.formData.append("photo",this.photo) 
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
