import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { GenerarDonacionPage } from './generar-donacion.page';

describe('GenerarDonacionPage', () => {
  let component: GenerarDonacionPage;
  let fixture: ComponentFixture<GenerarDonacionPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GenerarDonacionPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(GenerarDonacionPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
