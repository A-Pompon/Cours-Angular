import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListGroupeProduitsComponent } from './list-groupe-produits.component';

describe('ListGroupeProduitsComponent', () => {
  let component: ListGroupeProduitsComponent;
  let fixture: ComponentFixture<ListGroupeProduitsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListGroupeProduitsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListGroupeProduitsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
