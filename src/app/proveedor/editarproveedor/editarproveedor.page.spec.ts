import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { EditarproveedorPage } from './editarproveedor.page';

describe('EditarproveedorPage', () => {
  let component: EditarproveedorPage;
  let fixture: ComponentFixture<EditarproveedorPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditarproveedorPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(EditarproveedorPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
