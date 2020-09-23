import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { RegistroDistribucionPage } from './registro-distribucion.page';

describe('RegistroDistribucionPage', () => {
  let component: RegistroDistribucionPage;
  let fixture: ComponentFixture<RegistroDistribucionPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegistroDistribucionPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(RegistroDistribucionPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
