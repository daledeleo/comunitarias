import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { ListaContactosService } from 'src/app/services/lista-contactos/lista-contactos.service';
import { ContactosList } from 'src/app/interfaces/contactosList';

@Component({
  selector: 'app-detalle-contacto',
  templateUrl: './detalle-contacto.page.html',
  styleUrls: ['./detalle-contacto.page.scss'],
})
export class DetalleContactoPage implements OnInit {
  id: string;
  public contacto: ContactosList=new ContactosList();

  constructor(public router: Router,
              private cdRef : ChangeDetectorRef,
              public alertController: AlertController,
              private activateRoute: ActivatedRoute,
              public listacontactosService: ListaContactosService) { }


  ngOnInit() {
    this.activateRoute.paramMap.subscribe(paramMap => {
      const Id = paramMap.get('id')
      this.id = Id
   
      this.listacontactosService.getContactosId(Id)
        .subscribe(
          (data)=>{this.contacto=data;},
          (error)=>{console.log(error);}
          )
    });
  }

}
