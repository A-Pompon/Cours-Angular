import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GroupeProduitsComponent } from './groupe-produits.component';

describe('GroupeProduitsComponent', () => {
  let component: GroupeProduitsComponent;
  let fixture: ComponentFixture<GroupeProduitsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GroupeProduitsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GroupeProduitsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
