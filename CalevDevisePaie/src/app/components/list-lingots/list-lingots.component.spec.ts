import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListLingotsComponent } from './list-lingots.component';

describe('ListLingotsComponent', () => {
  let component: ListLingotsComponent;
  let fixture: ComponentFixture<ListLingotsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListLingotsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListLingotsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
