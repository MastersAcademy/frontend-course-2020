import { TestBed } from '@angular/core/testing';

import { PathGuard } from './path.guard';

describe('PathGuard', () => {
  let guard: PathGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(PathGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
