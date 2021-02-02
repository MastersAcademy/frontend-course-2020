import { TestBed } from '@angular/core/testing';

import { TravelingGuard } from './traveling.guard';

describe('TravelingGuard', () => {
  let guard: TravelingGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(TravelingGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
