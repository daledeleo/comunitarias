import { Component, OnInit } from '@angular/core';
import { CentroAcopioService } from '../../services/centro-acopio/centro-acopio.service'
import { CentroAcopioClass } from '../../clases/centro-acopio/centro-acopio-class'
import { ActivatedRoute, Router } from "@angular/router"

@Component({
  selector: 'app-centro-de-acopio-detalle',
  templateUrl: './centro-de-acopio-detalle.page.html',
  styleUrls: ['./centro-de-acopio-detalle.page.scss'],
})
export class CentroDeAcopioDetallePage implements OnInit {

  public centroAcopio: CentroAcopioClass=new CentroAcopioClass();
  public idCentroAcopio: any;
  public booelanPhoto=false;

  constructor(private centroAcopioApi: CentroAcopioService,
    private activateRoute: ActivatedRoute) {
      
  }

  recibiendoDatos(){
    this.idCentroAcopio = this.activateRoute.snapshot.queryParamMap.get("centroAcopioId");
    this.centroAcopioApi.getCentroAcopioId(this.idCentroAcopio).subscribe(centroAcopio => {
      /**Guardando los datos del Centro de Acopio obtenidos del Api*/
      this.centroAcopio = centroAcopio;
      if(this.centroAcopio.photo==null){
        this.booelanPhoto=false //no hay foto
      }else{
        this.booelanPhoto=true //si hay foto
      }
    }, error => {
      console.log(error)
    });

  }

  ngOnInit() {
    this.recibiendoDatos();
  }

}
