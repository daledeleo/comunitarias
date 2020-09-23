import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CentroAcopioPage } from './centro-acopio.page';

describe('CentroAcopioPage', () => {
  let component: CentroAcopioPage;
  let fixture: ComponentFixture<CentroAcopioPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CentroAcopioPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CentroAcopioPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
