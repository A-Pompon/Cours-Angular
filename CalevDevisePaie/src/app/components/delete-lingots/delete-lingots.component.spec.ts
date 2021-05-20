import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteLingotsComponent } from './delete-lingots.component';

describe('DeleteLingotsComponent', () => {
  let component: DeleteLingotsComponent;
  let fixture: ComponentFixture<DeleteLingotsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeleteLingotsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteLingotsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
