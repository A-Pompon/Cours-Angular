import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddLingotsComponent } from './add-lingots.component';

describe('AddLingotsComponent', () => {
  let component: AddLingotsComponent;
  let fixture: ComponentFixture<AddLingotsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddLingotsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddLingotsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
