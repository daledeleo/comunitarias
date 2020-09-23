import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { ListaContactosService } from 'src/app/services/lista-contactos/lista-contactos.service';
import {ContactosList} from '../../interfaces/contactosList';
@Component({
  selector: 'app-editar-contacto',
  templateUrl: './editar-contacto.page.html',
  styleUrls: ['./editar-contacto.page.scss'],
})
export class EditarContactoPage implements OnInit {
  id: string;
  formularios={  
    firstName: '',
    lastName: '',
    social:'',
    phoneNumber:''  
    }
  
  formData = new FormData();
  public contacto: ContactosList=new ContactosList();
  idP: string;

  constructor(public router: Router,
    public alertController: AlertController,   
    private activateRoute: ActivatedRoute,
    private cdRef : ChangeDetectorRef,
    public listacontactosService: ListaContactosService) { }

  ngOnInit() {
    this.activateRoute.paramMap.subscribe(paramMap => {
      const Id = paramMap.get('id');
      const IdP = paramMap.get('idP');
      this.idP= IdP;
      this.id = Id;


      this.listacontactosService.getContactosId(IdP)
        .subscribe(
          (data)=>{this.contacto=data;},
          (error)=>{console.log(error);}
          )
    });
   
  }
  ngAfterContentChecked() {
    this.cdRef.detectChanges();
  }

  UpdateContacto(){
    this.formData.append('firstName', this.formularios.firstName);
    this.formData.append('lastName',  this.formularios.lastName);
    this.formData.append('social', this.formularios.social);
    this.formData.append('phoneNumber', this.formularios.phoneNumber);

    this.listacontactosService.updateContactos(this.formData,this.idP)
      .subscribe( 
        (newTask)=>{console.log("metodo Update")}
      );
      this.router.navigateByUrl("lista-contactos/"+this.id);
  

  }

}
