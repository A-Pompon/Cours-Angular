import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditGroupeProduitsComponent } from './edit-groupe-produits.component';

describe('EditGroupeProduitsComponent', () => {
  let component: EditGroupeProduitsComponent;
  let fixture: ComponentFixture<EditGroupeProduitsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditGroupeProduitsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditGroupeProduitsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
