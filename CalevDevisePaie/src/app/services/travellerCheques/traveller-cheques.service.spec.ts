import { TestBed } from '@angular/core/testing';

import { TravellerChequesService } from './traveller-cheques.service';

describe('TravellerChequesService', () => {
  let service: TravellerChequesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TravellerChequesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
