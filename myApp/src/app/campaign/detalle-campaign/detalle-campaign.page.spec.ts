import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DetalleCampaignPage } from './detalle-campaign.page';

describe('DetalleCampaignPage', () => {
  let component: DetalleCampaignPage;
  let fixture: ComponentFixture<DetalleCampaignPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetalleCampaignPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DetalleCampaignPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
