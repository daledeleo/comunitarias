import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { EditarvolunteerPage } from './editarvolunteer.page';

describe('EditarvolunteerPage', () => {
  let component: EditarvolunteerPage;
  let fixture: ComponentFixture<EditarvolunteerPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditarvolunteerPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(EditarvolunteerPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
