import { TestBed } from '@angular/core/testing';

import { JourneyGuard } from './journey.guard';

describe('DefaulttGuard', () => {
  let guard: JourneyGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(JourneyGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
