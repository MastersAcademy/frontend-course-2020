import { TestBed } from '@angular/core/testing';

import { CheckRoutingService } from './check-routing.service';

describe('CheckRoutingService', () => {
  let service: CheckRoutingService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CheckRoutingService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
