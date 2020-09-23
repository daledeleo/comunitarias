import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { GrupoDeApoyoIngresarMiembrosPage } from './grupo-de-apoyo-ingresar-miembros.page';

describe('GrupoDeApoyoIngresarMiembrosPage', () => {
  let component: GrupoDeApoyoIngresarMiembrosPage;
  let fixture: ComponentFixture<GrupoDeApoyoIngresarMiembrosPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GrupoDeApoyoIngresarMiembrosPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(GrupoDeApoyoIngresarMiembrosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
