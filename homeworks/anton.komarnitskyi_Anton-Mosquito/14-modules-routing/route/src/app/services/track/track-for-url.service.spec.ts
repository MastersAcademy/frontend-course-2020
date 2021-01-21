import { TestBed } from '@angular/core/testing';

import { TrackForURLService } from './track-for-url.service';

describe('TrackForURLService', () => {
  let service: TrackForURLService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TrackForURLService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
