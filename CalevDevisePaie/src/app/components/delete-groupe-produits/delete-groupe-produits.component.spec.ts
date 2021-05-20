import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteGroupeProduitsComponent } from './delete-groupe-produits.component';

describe('DeleteGroupeProduitsComponent', () => {
  let component: DeleteGroupeProduitsComponent;
  let fixture: ComponentFixture<DeleteGroupeProduitsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeleteGroupeProduitsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteGroupeProduitsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
