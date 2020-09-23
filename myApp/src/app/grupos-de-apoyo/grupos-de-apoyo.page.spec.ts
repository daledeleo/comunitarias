import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { GruposDeApoyoPage } from './grupos-de-apoyo.page';

describe('GruposDeApoyoPage', () => {
  let component: GruposDeApoyoPage;
  let fixture: ComponentFixture<GruposDeApoyoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GruposDeApoyoPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(GruposDeApoyoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
