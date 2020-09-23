import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CentroDeAcopioDetallePage } from './centro-de-acopio-detalle.page';

describe('CentroDeAcopioDetallePage', () => {
  let component: CentroDeAcopioDetallePage;
  let fixture: ComponentFixture<CentroDeAcopioDetallePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CentroDeAcopioDetallePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CentroDeAcopioDetallePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
