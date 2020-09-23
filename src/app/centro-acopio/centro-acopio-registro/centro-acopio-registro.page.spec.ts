import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CentroAcopioRegistroPage } from './centro-acopio-registro.page';

describe('CentroAcopioRegistroPage', () => {
  let component: CentroAcopioRegistroPage;
  let fixture: ComponentFixture<CentroAcopioRegistroPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CentroAcopioRegistroPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CentroAcopioRegistroPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
