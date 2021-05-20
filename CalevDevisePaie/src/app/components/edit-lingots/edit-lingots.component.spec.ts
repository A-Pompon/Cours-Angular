import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditLingotsComponent } from './edit-lingots.component';

describe('EditLingotsComponent', () => {
  let component: EditLingotsComponent;
  let fixture: ComponentFixture<EditLingotsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditLingotsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditLingotsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
