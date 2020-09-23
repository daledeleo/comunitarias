import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import {ActivatedRoute } from '@angular/router';
import {CategoriaService} from '../../services/categoria/categoria.service';
import {Categoria} from '../../interfaces/categoria';

import { Router } from '@angular/router';

@Component({
  selector: 'app-editar-categoria',
  templateUrl: './editar-categoria.page.html',
  styleUrls: ['./editar-categoria.page.scss'],
})
export class EditarCategoriaPage implements OnInit {
  formularios={
    name: '',
    description: '',
    createdBy: ''
    };
    public categoria: Categoria=new Categoria();
    
    id: string;
  constructor(private activateRoute: ActivatedRoute, 
    public alertController: AlertController,
    public categoriaservice: CategoriaService, public router: Router) { }

  ngOnInit() {
    this.activateRoute.paramMap.subscribe(paramMap => {
      const categoriaId = paramMap.get('categoriaId')
      this.id = categoriaId
      this.categoriaservice.getCategoriaId(categoriaId)
      .subscribe(
      (data)=>{this.categoria=data},
      (error)=>{console.log(error);}
      )
    });
  }

  async alertaError(header_msg, msg) {
    const alert = await this.alertController.create({
      header: header_msg,
      message: msg,
      buttons: ['OK']
    });
    await alert.present();
  }


  upDatetCategorias(){

    let categoria ={
      id: this.id,
      name: this.formularios.name,
      description:this.formularios.description
    };
    this.categoriaservice.updateCategorias(categoria,this.id)
    .subscribe(
      data => {
        this.alertaError('Editar categoria', 'Categoria editada correctamente.');
        this.router.navigateByUrl('/categoria');
      },
      error => {
        this.alertaError('Error al editar categoria', 'Algo salio mal, por favor, intente de nuevo');
        this.router.navigateByUrl('/categoria');
      }
    );
    
  }

}

