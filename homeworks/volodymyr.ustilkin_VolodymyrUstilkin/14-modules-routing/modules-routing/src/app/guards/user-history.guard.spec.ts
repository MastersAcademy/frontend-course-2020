import { TestBed } from '@angular/core/testing';

import { UserHistoryGuard } from './user-history.guard';

describe('UserHistoryGuard', () => {
  let guard: UserHistoryGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(UserHistoryGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
