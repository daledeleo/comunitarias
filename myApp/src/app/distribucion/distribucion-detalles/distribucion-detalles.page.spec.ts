import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DistribucionDetallesPage } from './distribucion-detalles.page';

describe('DistribucionDetallesPage', () => {
  let component: DistribucionDetallesPage;
  let fixture: ComponentFixture<DistribucionDetallesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DistribucionDetallesPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DistribucionDetallesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
