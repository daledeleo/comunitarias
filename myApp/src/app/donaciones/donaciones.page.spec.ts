import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DonacionesPage } from './donaciones.page';

describe('DonacionesPage', () => {
  let component: DonacionesPage;
  let fixture: ComponentFixture<DonacionesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DonacionesPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DonacionesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
