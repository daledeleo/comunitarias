import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http'
import { Distribucion } from '../../clases/distribucion/distribucion'
import { Api } from '../enum'

@Injectable({
  providedIn: 'root'
})
export class DistribucionService {
  private api: string = Api.api+'distribution/';

  constructor(private http: HttpClient,) { }

  headers = new HttpHeaders().set('Token', localStorage.getItem('ACCESS_TOKEN'));

  getDistribuciones() {
    return this.http.get<Distribucion[]>(this.api, { headers: this.headers });
  }

  eliminarDistribucion(id: string) {
    return this.http.delete(this.api + id, { headers: this.headers }).subscribe(resp=>{
      console.log("Eliminacion exitosa en Distribucion"),
      error=>{console.log("Eliminacion fallida en Distribucion")}
    });
  }

  agregarDistribucion(formDistribucion:any){
    return this.http.post(this.api, formDistribucion, { headers: this.headers }).subscribe(mensaje=>{
      console.log(mensaje);
    },error=>{
      console.log(error)
    });
  }

  actualizarDistribucion(distribucion:any,id:any){
    const path= this.api+id+'/';
    return this.http.patch(path, distribucion, { headers: this.headers });
  }
  getDistribucionId(id:any){
    return this.http.get<Distribucion>(this.api + id, { headers: this.headers });
  }
}
