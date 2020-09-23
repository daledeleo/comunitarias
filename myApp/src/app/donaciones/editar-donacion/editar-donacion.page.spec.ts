import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { EditarDonacionPage } from './editar-donacion.page';

describe('EditarDonacionPage', () => {
  let component: EditarDonacionPage;
  let fixture: ComponentFixture<EditarDonacionPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditarDonacionPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(EditarDonacionPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
