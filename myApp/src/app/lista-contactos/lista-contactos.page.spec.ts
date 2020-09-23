import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ListaContactosPage } from './lista-contactos.page';

describe('ListaContactosPage', () => {
  let component: ListaContactosPage;
  let fixture: ComponentFixture<ListaContactosPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListaContactosPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ListaContactosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
