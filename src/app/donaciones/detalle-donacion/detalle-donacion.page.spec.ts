import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DetalleDonacionPage } from './detalle-donacion.page';

describe('DetalleDonacionPage', () => {
  let component: DetalleDonacionPage;
  let fixture: ComponentFixture<DetalleDonacionPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetalleDonacionPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DetalleDonacionPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
