import { Component, OnInit, ChangeDetectorRef} from '@angular/core';
import {ActivatedRoute, Router } from '@angular/router';
import {CampaignService} from '../../services/campaign/campaign.service';
import {ScopeService} from '../../services/scope/scope.service';
import { AlertController } from '@ionic/angular';
import {Campaign} from '../../interfaces/campaign';


@Component({
  selector: 'app-editar-campaign',
  templateUrl: './editar-campaign.page.html',
  styleUrls: ['./editar-campaign.page.scss'],
})
export class EditarCampaignPage implements OnInit {
  imageSrc;
  Scopes;

  public campaign: Campaign=new Campaign();
  id: string;
  formData= new FormData();
  photo: File;
  formularios={
    scope:'',
    photo: '',
    name: '',
    description: '',
    contactName:'',
    }

  constructor(private activateRoute: ActivatedRoute,
              public campaignservice: CampaignService,
              public scopeService:ScopeService,
              public alertController: AlertController,
              private cdRef : ChangeDetectorRef,
              public router: Router ) { }
  
  ngAfterContentChecked() {
    this.cdRef.detectChanges();
  }


  ngOnInit() {
    this.Getscopes();
    this.activateRoute.paramMap.subscribe(paramMap => {
      const detallecampaign = paramMap.get('id')
      this.id = detallecampaign
      this.campaignservice.getCampaignsId(detallecampaign)
      .subscribe(
      (data)=>{this.campaign=data},
      (error)=>{console.log(error);}
      )
    });
   
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

  UpdateCampaign(){   
    this.formData.append("name",this.formularios.name) 
    this.formData.append("contactName", this.formularios.contactName) 
    this.formData.append("scope",this.formularios.scope)  
    this.formData.append("description",this.formularios.description)  
    console.log("metodo update")
 
    this.campaignservice.updateCampaigns(this.formData,this.id).subscribe(
      data => {
        this.alertaError('Editar Campana', 'Campana editada correctamente.');
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

}
