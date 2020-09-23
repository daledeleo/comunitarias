import { Component, OnInit } from '@angular/core';
import {CampaignService} from '../../services/campaign/campaign.service';
import {ScopeService} from '../../services/scope/scope.service';
import { AlertController } from '@ionic/angular';
import {Campaign} from '../../interfaces/campaign';
import { GrupoService } from 'src/app/services/grupo-service/grupo.service';
import { VoluntariosService } from 'src/app/services/voluntarios/voluntarios.service';
import { LoginService } from 'src/app/services/login/login.service';
import { CreteByService } from '../../services/create-by.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-generar-campaign',
  templateUrl: './generar-campaign.page.html',
  styleUrls: ['./generar-campaign.page.scss'],
})
export class GenerarCampaignPage implements OnInit {
  Scopes
  imageSrc;
  photo: File;
  formularios={
    scope:'',
    photo: '',
    name: '',
    description: '',
    contactName:''
    };
    
  formData= new FormData();
  gruposApoyos;
  voluntarios;
  idcreador: string;
  

  constructor(public loginService: LoginService,
              public alertController: AlertController,
              public scopeService:ScopeService,
              public campaignservice:CampaignService,
              public voluntariosvervice: VoluntariosService,
              public gruposervice: GrupoService,
              public router: Router,
              private createdBy:CreteByService) { }

  ngOnInit() {
    this.Getscopes()

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

  Getscopes(){
    this.scopeService.getScope()
    .subscribe(
      (data)=>{this.Scopes=data
      },
      (error)=>{console.log(error);}
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

  postCampaign(){ 
    this.formData.append("name",this.formularios.name) 
    this.formData.append("contactName", this.formularios.contactName) 
    this.formData.append("description",this.formularios.description)
    this.formData.append("scope",this.formularios.scope) 
    this.formData.append("photo",this.photo)  
    this.formData.append("createdBy",this.createdBy.getNombre())  

    this.campaignservice.postCampaigns(this.formData).subscribe(
      data => {
        this.alertaError('Crear Campana', 'Campana creada correctamente.');
        this.router.navigateByUrl('/campaign');
      },
      error => {
        this.alertaError('Error', 'Algo salio mal, por favor, intente de nuevo');
        this.router.navigateByUrl('/campaign');
      }
    );
    }

    changeListener($event) : void {
      this.photo = $event.target.files[0];
    }

    readURL(event): void {
      if (event.target.files && event.target.files[0]) {
          const file = event.target.files[0];
          this.photo = event.target.files[0];
  
          const reader = new FileReader();
          reader.onload = e => this.imageSrc = reader.result;
  
          reader.readAsDataURL(file);
      }
  }
  removePic() {
    this.imageSrc = null;
  }

}
