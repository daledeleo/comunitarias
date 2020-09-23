import { Component, OnInit } from '@angular/core';
import { VoluntariosService } from 'src/app/services/voluntarios/voluntarios.service';
import { ActivatedRoute } from '@angular/router';
import { ActivityService } from 'src/app/services/activity/activity.service';
import { UserService } from 'src/app/services/user/user.service';
import { Voluntario } from '../../clases/voluntario/voluntario'

@Component({
  selector: 'app-detallevolunteer',
  templateUrl: './detallevolunteer.page.html',
  styleUrls: ['./detallevolunteer.page.scss'],
})
export class DetallevolunteerPage implements OnInit {
  users
  public volunteer: Voluntario=new Voluntario();
  
  id: string;
  activities;

  constructor(private activateRoute: ActivatedRoute,
              public voluntariosService: VoluntariosService,
              public activityService: ActivityService,
              public userService: UserService) { }

  ngOnInit() {
    this.activateRoute.paramMap.subscribe(paramMap => {
      const detallevolunteer = paramMap.get('id')
    
      this.voluntariosService.getVoluntarioId(detallevolunteer)
      .subscribe(
      (data)=>{this.volunteer=data},
      (error)=>{console.log(error);}
      )
    }); 

    this.activityService.getActivity()
    .subscribe(
    (data)=>{this.activities=data},
    (error)=>{console.log(error)}
    );

    this.userService.getUser()
    .subscribe(
    (data)=>{this.users=data},
    (error)=>{console.log(error)}
    );

    

  }

}
