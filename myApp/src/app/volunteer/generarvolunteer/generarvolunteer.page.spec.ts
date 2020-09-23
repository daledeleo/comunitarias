import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { GenerarvolunteerPage } from './generarvolunteer.page';

describe('GenerarvolunteerPage', () => {
  let component: GenerarvolunteerPage;
  let fixture: ComponentFixture<GenerarvolunteerPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GenerarvolunteerPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(GenerarvolunteerPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
