import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditTravellerChequesComponent } from './edit-traveller-cheques.component';

describe('EditTravellerChequesComponent', () => {
  let component: EditTravellerChequesComponent;
  let fixture: ComponentFixture<EditTravellerChequesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditTravellerChequesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditTravellerChequesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
