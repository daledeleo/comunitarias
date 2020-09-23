import { Component, OnInit } from '@angular/core';
import { DatePipe } from "@angular/common";
import {ActivatedRoute } from '@angular/router';
import { DonacionesService } from '../../services/donaciones/donaciones.service';
import {CategoriaService} from '../../services/categoria/categoria.service';
import {ProviderService} from '../../services/provider/provider.service';
import {CentroAcopioService} from '../../services/centro-acopio/centro-acopio.service';
import {VoluntariosService} from '../../services/voluntarios/voluntarios.service';
import {GrupoService} from '../../services/grupo-service/grupo.service';
import {Categoria} from '../../interfaces/categoria';
import { Grupo } from '../../clases/grupo/grupo';
import {Donacion} from '../../interfaces/donacion';
import { Provider } from 'src/app/interfaces/provider';
import { CentroAcopioClass } from 'src/app/clases/centro-acopio/centro-acopio-class';
import { Voluntario, Voluntarios } from 'src/app/clases/voluntario/voluntario';
@Component({
  selector: 'app-detalle-donacion',
  templateUrl: './detalle-donacion.page.html',
  styleUrls: ['./detalle-donacion.page.scss'],
})
export class DetalleDonacionPage implements OnInit {
  public donacion: Donacion=new Donacion();
  public provider:  Provider = new Provider();
  public categoria:  Provider = new Provider();
  public centroacopio: CentroAcopioClass = new CentroAcopioClass();
  public voluntarios: Voluntario []=[];
  public gruposApoyos: Grupo[] = [];


  constructor(private datePipe: DatePipe,
    private activateRoute: ActivatedRoute,
    public donacionesService:DonacionesService,
    public categoriaservice: CategoriaService,
    public providerservice: ProviderService,
    public centroAcopioservice: CentroAcopioService,
    public voluntariosvervice: VoluntariosService,
    public gruposervice: GrupoService) { }

  ngOnInit() {
    this.activateRoute.paramMap.subscribe(paramMap => {
      const donaciones = paramMap.get('id')
      this.donacionesService.getDonacionesId(donaciones)
      .subscribe(
      (data)=>{this.donacion=data;

              this.categoriaservice.getCategoriaId(data.category)
              .subscribe(
                (data)=>{this.categoria=data},
                (error)=>{console.log(error);}
              );

              this.providerservice.getProviderId(data.provider)
              .subscribe(
                (data)=>{this.provider=data},
                (error)=>{console.log(error);}
              );

              this.centroAcopioservice.getCentroAcopioId(data.collectionCenter)
              .subscribe(
                (data)=>{this.centroacopio=data},
                (error)=>{console.log(error);}
              );
            
      },
      (error)=>{console.log(error);}
      )  });

      this.voluntariosvervice.getVoluntarios()
      .subscribe(
      (data)=>{this.voluntarios=data},
      (error)=>{console.log(error)}
      );

      this.gruposervice.getGrupo()
      .subscribe(
      (data)=>{this.gruposApoyos=data},
      (error)=>{console.log(error)}
      );




  }

 
}
