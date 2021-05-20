import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteTravellerChequesComponent } from './delete-traveller-cheques.component';

describe('DeleteTravellerChequesComponent', () => {
  let component: DeleteTravellerChequesComponent;
  let fixture: ComponentFixture<DeleteTravellerChequesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeleteTravellerChequesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteTravellerChequesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
