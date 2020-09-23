import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { GenerarproveedorPage } from './generarproveedor.page';

describe('GenerarproveedorPage', () => {
  let component: GenerarproveedorPage;
  let fixture: ComponentFixture<GenerarproveedorPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GenerarproveedorPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(GenerarproveedorPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
