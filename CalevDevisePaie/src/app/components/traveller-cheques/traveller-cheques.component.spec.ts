import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TravellerChequesComponent } from './traveller-cheques.component';

describe('TravellerChequesComponent', () => {
  let component: TravellerChequesComponent;
  let fixture: ComponentFixture<TravellerChequesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TravellerChequesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TravellerChequesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
