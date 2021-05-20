import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LingotsComponent } from './lingots.component';

describe('LingotsComponent', () => {
  let component: LingotsComponent;
  let fixture: ComponentFixture<LingotsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LingotsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LingotsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
