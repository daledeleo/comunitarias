import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import {VoluntariosService} from '../services/voluntarios/voluntarios.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-volunteer',
  templateUrl: './volunteer.page.html',
  styleUrls: ['./volunteer.page.scss'],
})
export class VolunteerPage implements OnInit {
volunteers
  constructor(public alertController: AlertController,
              public voluntariosService: VoluntariosService,
    route: ActivatedRoute) { 
    route.params.subscribe(val => {
      this.ngOnInit(); // ejecutar ngOnInit al cargar pagina
    })

    }

  ngOnInit() {
    this.voluntariosService.getVoluntarios()
    .subscribe(
      (data)=>{this.volunteers=data
      },
      (error)=>{console.log(error);}
      );
  }

  deleteVolunteer(id: string){
  this.voluntariosService.deletevoluntario(id)
  .subscribe(
      (data)=>{console.log(data)},
      (error)=>{console.log(error);}
      );
    this.ngOnInit();       
  }

  doRefresh(event) {
    setTimeout(() => {
      this.ngOnInit();
      event.target.complete();   
    }, 200);
  }

  async presentAlertElimnarVolunteer(id: string) {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',

      header: 'Esta seguro que desea eliminar este voluntario!',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
          handler: (blah) => {
            console.log('Confirm Cancel: blah');
          }
        }, {
          text: 'Ok',
          handler: () => {
            console.log('Confirm Okay');
            this.deleteVolunteer(id)
          }
        }
      ]
    });
    await alert.present();
  }

}
