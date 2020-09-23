import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import {ActivatedRoute, Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import {ProviderService} from '../../services/provider/provider.service';
import { CategoriaService } from 'src/app/services/categoria/categoria.service';
import {Provider} from '../../interfaces/provider';
import { Categoria } from 'src/app/interfaces/categoria';
@Component({
  selector: 'app-editarproveedor',
  templateUrl: './editarproveedor.page.html',
  styleUrls: ['./editarproveedor.page.scss'],
})
export class EditarproveedorPage implements OnInit {
  
   providercateg= "";
  formularios={
    name: '',
    address: '',
    phoneNumber: '',
    email: '',
    categories: [],
    };
    formData= new FormData();
    public provider: Provider=new Provider();
    id: string;
    categorias;
    categorias_selected = [];
    
  constructor(public providerservice: ProviderService,
              public router: Router,
              private cdRef : ChangeDetectorRef,
              private activateRoute: ActivatedRoute,
              public alertController: AlertController,
              public categoriaservice: CategoriaService) { 
                this.activateRoute.paramMap.subscribe(paramMap => {
                  const Id = paramMap.get('id')
                  console.log(Id)
                  this.id = Id
                  this.providerservice.getProviderId(Id)
                  .subscribe(
                  (data)=>{this.provider=data;
                          this.providercateg=data.categories;

                          this.categorias_selected = []; 
                          // this.categories = []; 
                          for ( let num of data.categories){
                            this.categorias_selected.push(num.toString());


                          //for (let i = 0; i < data.categories.length; i++) {
                          //  this.categorias_selected.push(data.activities[i].toString())    
                            //this.categories.push(data.activities[i].id);
                            //this.categoriaservice.getCategoriaId(data.categories[i]).subscribe(
                            //  data => this.categorias_selected.push(data.toString())            
                            //)
                          }
                        
                        
                        
                        },
                  (error)=>{console.log(error);}
                  )
                });
              }

  ngAfterContentChecked() {
    this.cdRef.detectChanges();
  }

  ngOnInit() {
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

  updateProvider(){

    this.formData.append("name", this.formularios.name)
    this.formData.append("address", this.formularios.address)
    this.formData.append("phoneNumber", this.formularios.phoneNumber)
    this.formData.append("email", this.formularios.email)
    for (let index = 0; index <  this.formularios.categories.length; index++) {
      this.formData.append('categories',  this.formularios.categories[index]);      
    }
    
    this.providerservice.updateProvider(this.formData,this.id).subscribe(
      data => {
        this.alertaError('Editar Proveedor', 'Proveedor editado correctamente.');
        this.router.navigateByUrl('/provider');
      },
      error => {
        this.alertaError('Error', 'Algo salio mal, por favor, intente de nuevo');
        this.router.navigateByUrl('/provider');
      }
    );
  
  }

}

