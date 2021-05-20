import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddGroupeProduitsComponent } from './add-groupe-produits.component';

describe('AddGroupeProduitsComponent', () => {
  let component: AddGroupeProduitsComponent;
  let fixture: ComponentFixture<AddGroupeProduitsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddGroupeProduitsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddGroupeProduitsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
