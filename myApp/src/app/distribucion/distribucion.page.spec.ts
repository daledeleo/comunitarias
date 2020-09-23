import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DistribucionPage } from './distribucion.page';

describe('DistribucionPage', () => {
  let component: DistribucionPage;
  let fixture: ComponentFixture<DistribucionPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DistribucionPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DistribucionPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
