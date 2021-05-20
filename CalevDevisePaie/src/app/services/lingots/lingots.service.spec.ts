import { TestBed } from '@angular/core/testing';

import { LingotsService } from './lingots.service';

describe('LingotsService', () => {
  let service: LingotsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LingotsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
