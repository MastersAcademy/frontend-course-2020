import { TestBed } from '@angular/core/testing';

import { ServiceCarService } from './car.service';

describe('ServiceCarService', () => {
  let service: ServiceCarService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServiceCarService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
