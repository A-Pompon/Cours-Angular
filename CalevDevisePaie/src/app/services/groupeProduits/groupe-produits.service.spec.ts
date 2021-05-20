import { TestBed } from '@angular/core/testing';

import { GroupeProduitsService } from './groupe-produits.service';

describe('GroupeProduitsService', () => {
  let service: GroupeProduitsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GroupeProduitsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
