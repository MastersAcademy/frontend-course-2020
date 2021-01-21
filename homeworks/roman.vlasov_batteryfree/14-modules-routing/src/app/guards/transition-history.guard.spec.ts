import { TestBed } from '@angular/core/testing';

import { TransitionHistoryGuard } from './transition-history.guard';

describe('TransitionHistoryGuard', () => {
  let guard: TransitionHistoryGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(TransitionHistoryGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
