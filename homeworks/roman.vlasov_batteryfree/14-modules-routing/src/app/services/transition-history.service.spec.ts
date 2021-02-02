import { TestBed } from '@angular/core/testing';

import { TransitionHistoryService } from './transition-history.service';

describe('TransitionHistoryService', () => {
  let service: TransitionHistoryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TransitionHistoryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
