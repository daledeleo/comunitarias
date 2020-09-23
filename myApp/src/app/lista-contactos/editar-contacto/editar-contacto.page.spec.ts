import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { EditarContactoPage } from './editar-contacto.page';

describe('EditarContactoPage', () => {
  let component: EditarContactoPage;
  let fixture: ComponentFixture<EditarContactoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditarContactoPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(EditarContactoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
