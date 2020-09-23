import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DetallevolunteerPage } from './detallevolunteer.page';

describe('DetallevolunteerPage', () => {
  let component: DetallevolunteerPage;
  let fixture: ComponentFixture<DetallevolunteerPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetallevolunteerPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DetallevolunteerPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
