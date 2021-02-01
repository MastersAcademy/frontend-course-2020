import { TestBed } from '@angular/core/testing';

import { UserHistoryCheckerService } from './user-history-checker.service';

describe('UserHistoryCheckerService', () => {
  let service: UserHistoryCheckerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UserHistoryCheckerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
