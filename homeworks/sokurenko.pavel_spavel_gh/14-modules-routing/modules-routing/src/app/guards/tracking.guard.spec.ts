import { TestBed } from '@angular/core/testing';

import { TrackingGuard } from './tracking.guard';

describe('TrackingGuard', () => {
  let guard: TrackingGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(TrackingGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
