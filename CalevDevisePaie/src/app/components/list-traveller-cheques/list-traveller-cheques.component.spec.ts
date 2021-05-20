import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListTravellerChequesComponent } from './list-traveller-cheques.component';

describe('ListTravellerChequesComponent', () => {
  let component: ListTravellerChequesComponent;
  let fixture: ComponentFixture<ListTravellerChequesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListTravellerChequesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListTravellerChequesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
