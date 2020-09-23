import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { GruposDeApoyoRegistroPage } from './grupos-de-apoyo-registro.page';

describe('GruposDeApoyoRegistroPage', () => {
  let component: GruposDeApoyoRegistroPage;
  let fixture: ComponentFixture<GruposDeApoyoRegistroPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GruposDeApoyoRegistroPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(GruposDeApoyoRegistroPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
