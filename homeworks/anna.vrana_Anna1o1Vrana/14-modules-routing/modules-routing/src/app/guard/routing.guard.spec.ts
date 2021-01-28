import { TestBed } from '@angular/core/testing';

import { RoutingGuard } from './routing.guard';

describe('RoutingGuard', () => {
  let guard: RoutingGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(RoutingGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
