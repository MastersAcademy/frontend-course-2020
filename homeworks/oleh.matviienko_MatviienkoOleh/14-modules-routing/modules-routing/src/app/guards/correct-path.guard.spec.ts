import { TestBed } from '@angular/core/testing';

import { CorrectPathGuard } from './correct-path.guard';

describe('CorrectPathGuard', () => {
  let guard: CorrectPathGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(CorrectPathGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
