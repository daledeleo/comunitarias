import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { GrupoDeApoyoDetallesPage } from './grupo-de-apoyo-detalles.page';

describe('GrupoDeApoyoDetallesPage', () => {
  let component: GrupoDeApoyoDetallesPage;
  let fixture: ComponentFixture<GrupoDeApoyoDetallesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GrupoDeApoyoDetallesPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(GrupoDeApoyoDetallesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
