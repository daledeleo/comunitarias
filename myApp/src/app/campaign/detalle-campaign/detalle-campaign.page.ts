import { Component, OnInit } from '@angular/core';
import {ActivatedRoute } from '@angular/router';
import {CampaignService} from '../../services/campaign/campaign.service';
import {ScopeService} from '../../services/scope/scope.service';
import {Campaign} from '../../interfaces/campaign';
@Component({
  selector: 'app-detalle-campaign',
  templateUrl: './detalle-campaign.page.html',
  styleUrls: ['./detalle-campaign.page.scss'],
})
export class DetalleCampaignPage implements OnInit {
  public campaign: Campaign=new Campaign();
  
  id: string;
  Scopes;

  constructor(private activateRoute: ActivatedRoute,
              public campaignservice: CampaignService,
              public scopeService:ScopeService) { }

  ngOnInit() {
    
    this.activateRoute.paramMap.subscribe(paramMap => {
      const detallecampaign = paramMap.get('id')
      this.id = detallecampaign
      this.campaignservice.getCampaignsId(detallecampaign)
      .subscribe(
      (data)=>{this.campaign=data},
      (error)=>{console.log(error);}
      )
    }); 

    this.scopeService.getScope()
    .subscribe(
      (data)=>{this.Scopes=data
      },
      (error)=>{console.log(error);}
      );
  }

}
