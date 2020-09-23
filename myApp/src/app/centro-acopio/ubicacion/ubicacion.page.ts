import { Component, OnInit } from '@angular/core';
import { Map, tileLayer, marker, Popup, Marker } from "leaflet"
import { Geolocation } from "@ionic-native/geolocation/ngx"
import { ActivatedRoute, Router } from "@angular/router"
import { CentroAcopioClass } from '../../clases/centro-acopio/centro-acopio-class'
import { CentroAcopioService } from '../../services/centro-acopio/centro-acopio.service'
import { FormBuilder, Validators, FormGroup } from '@angular/forms'
import { CreteByService } from '../../services/create-by.service'
import { CentroAcopioRegistroPage } from '../centro-acopio-registro/centro-acopio-registro.page'
import { AlertController } from '@ionic/angular';
import { Console } from 'console';
import { runInThisContext } from 'vm';

@Component({
  selector: 'app-ubicacion',
  templateUrl: './ubicacion.page.html',
  styleUrls: ['./ubicacion.page.scss'],
})
export class UbicacionPage implements OnInit {

  map: Map;
  public lat_ac: number = 0;
  public long_ac: number = 0;
  public nombre: string = '';
  public direccion: string = '';
  public nombreContact: string = '';
  public telefonoContac: string = '';
  public photo: File = CentroAcopioRegistroPage.photo;
  public lat_pa: number;
  public lng_pa: number;
  public centroAcopio_save: CentroAcopioClass = new CentroAcopioClass();
  public band: number = 0;
  public markPoint: Marker;
  public formData: FormData = new FormData();
  public lat_enviar: number = 0;
  public lng_enviar: number = 0;
  public accionEditar: number = 0;
  public centroAcopioId: any;
  public photoF: File;

  constructor(public geolocation: Geolocation,
    public activateRoute: ActivatedRoute, public route: Router, private conexionApi: CentroAcopioService, private formBuilder:
      FormBuilder, private createBy: CreteByService, public alertController: AlertController) {

  }

  public recibiendoDatos() {
    this.activateRoute.queryParamMap.subscribe((data) => {
      this.nombre = data.get('nombre');
      this.direccion = data.get('direccion');
      this.nombreContact = data.get('nombre_contact');
      this.telefonoContac = data.get('telefono_contact');
      if (data.get('accionEditar') == "1") {
        this.accionEditar = 1;
        this.centroAcopioId = data.get('id');
        console.log('Entro en editar');
      }
    })

  }
  async presentAlertConfirm() {
    let alert = await this.alertController.create({
      header: 'Error!',
      message: '<p><strong>' + "Ha ocurrido un error por favor intentelo mas tarde.." + '</strong>!!!</p>',
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          cssClass: 'secondary',
        },
      ]
    });
    await alert.present();
  }
  public enviarDatos() {
    this.formData.append("name", this.nombre);
    this.formData.append('address', this.direccion);
    this.formData.append('latitude', this.lat_enviar.toString());
    this.formData.append('longitude', this.lng_enviar.toString());
    this.formData.append('contactName', this.nombreContact);
    this.formData.append('contactPhone', this.telefonoContac);
    if (this.photo != null) {
      this.conexionApi.getCentroAcopioId(this.centroAcopioId).subscribe(centroAcopio => {
        if (centroAcopio.photo != null) {
          if (centroAcopio.photo.name != CentroAcopioRegistroPage.photo.name) {
            this.formData.append("photo", CentroAcopioRegistroPage.photo);
          }
        } else {
          this.formData.append("photo", CentroAcopioRegistroPage.photo);
        }
      })
    } else {
      this.formData.append("photo", '');
    }
    this.formData.append('createdBy', this.createBy.getNombre());

    if (this.accionEditar > 0) {
      this.conexionApi.updateCentroAcopio(this.formData, this.centroAcopioId)
        .subscribe((newTask) => {
          {
            console.log(newTask)
            this.route.navigate(['../centro-acopio']);
          }
        }, error => {
          this.presentAlertConfirm();
          this.accionEditar = 1;
        });

    } else {
      this.conexionApi.guardarCentroAcopio(this.formData).subscribe(
        (newTask) => {
          console.log(newTask);
          this.route.navigate(['../centro-acopio']);
        }
        , error => {
          this.presentAlertConfirm();
        });
    }

  }

  check_ubicacion() {
    return this.lng_enviar + this.lat_enviar == 0 || this.geolocation.getCurrentPosition() == null;
  }

  ionViewDidEnter() {
    this.leafletMap();
  }

  leafletMap() {
    if (this.accionEditar > 0) {
      this.conexionApi.getCentroAcopioId(this.centroAcopioId).subscribe(data => {
        this.lat_ac = data['latitude'];
        this.long_ac = data['longitude'];
      });

    }
    this.map = new Map('mapId2').setView([this.lat_ac, this.long_ac], 16);
    console.log(this.lat_ac);
    console.log(this.long_ac);
    tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(this.map);
    if (this.accionEditar > 0) {
      this.conexionApi.getCentroAcopioId(this.centroAcopioId).subscribe(data => {
        this.markPoint = marker([data['latitude'], data['longitude']]);
        this.markPoint.bindPopup("<p>" + "<b>Nombre: </b>" + data['name'] + "</p>");

        this.map.addLayer(this.markPoint);
        this.lat_enviar = data['latitude'];
        this.lng_enviar = data['longitude'];
        this.map.setView([data['latitude'], data['longitude']], 19);
        this.band = 1;
      });

    }
    this.map.on('click', (e) => { this.addMarker(e) });
  }

  ionViewWillLeave() {
    this.map.remove();
  }

  obtenerUbicacionActual() {
    this.geolocation.getCurrentPosition().then((geo) => {
      this.lat_ac = geo.coords.latitude;
      this.long_ac = geo.coords.longitude;
    })
  }

  /*Esta funcion solo añadira un marcador*/
  addMarker(e: any) {
    if (this.band == 0) {
      this.lat_pa = e.latlng.lat;
      this.lng_pa = e.latlng.lng;

      this.band = 1;
    } else if (this.band == 1) {
      this.map.removeLayer(this.markPoint);

      this.band = 2;
    } else if (this.band == 2) {
      this.map.removeLayer(this.markPoint);
      this.band = 1;
    }
    this.markPoint = marker([e.latlng.lat, e.latlng.lng]);
    this.markPoint.bindPopup("<p>" + "<b>Nombre: </b>" + this.nombre + "</p>");

    this.map.addLayer(this.markPoint);
    this.map.setView([e.latlng.lat, e.latlng.lng], 19);

    /*Añadiendo las coordenadas de latitud y longuitud para ser enviadas*/
    this.lat_enviar = e.latlng.lat;
    this.lng_enviar = e.latlng.lng;
  }

  ngOnInit() {
    this.obtenerUbicacionActual();
    this.recibiendoDatos();
  }

}
