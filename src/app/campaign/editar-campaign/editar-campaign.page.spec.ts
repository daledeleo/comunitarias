import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { EditarCampaignPage } from './editar-campaign.page';

describe('EditarCampaignPage', () => {
  let component: EditarCampaignPage;
  let fixture: ComponentFixture<EditarCampaignPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditarCampaignPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(EditarCampaignPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
