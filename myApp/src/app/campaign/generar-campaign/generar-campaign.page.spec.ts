import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { GenerarCampaignPage } from './generar-campaign.page';

describe('GenerarCampaignPage', () => {
  let component: GenerarCampaignPage;
  let fixture: ComponentFixture<GenerarCampaignPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GenerarCampaignPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(GenerarCampaignPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
