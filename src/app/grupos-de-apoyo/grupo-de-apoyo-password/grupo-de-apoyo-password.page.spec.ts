import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { GrupoDeApoyoPasswordPage } from './grupo-de-apoyo-password.page';

describe('GrupoDeApoyoPasswordPage', () => {
  let component: GrupoDeApoyoPasswordPage;
  let fixture: ComponentFixture<GrupoDeApoyoPasswordPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GrupoDeApoyoPasswordPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(GrupoDeApoyoPasswordPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
