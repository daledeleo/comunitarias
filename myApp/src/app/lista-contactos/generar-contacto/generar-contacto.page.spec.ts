import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { GenerarContactoPage } from './generar-contacto.page';

describe('GenerarContactoPage', () => {
  let component: GenerarContactoPage;
  let fixture: ComponentFixture<GenerarContactoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GenerarContactoPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(GenerarContactoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
