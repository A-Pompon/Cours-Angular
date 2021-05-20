import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddTravellerChequesComponent } from './add-traveller-cheques.component';

describe('AddTravellerChequesComponent', () => {
  let component: AddTravellerChequesComponent;
  let fixture: ComponentFixture<AddTravellerChequesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddTravellerChequesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddTravellerChequesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
