import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { GenerarCategoriaPage } from './generar-categoria.page';

describe('GenerarCategoriaPage', () => {
  let component: GenerarCategoriaPage;
  let fixture: ComponentFixture<GenerarCategoriaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GenerarCategoriaPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(GenerarCategoriaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
