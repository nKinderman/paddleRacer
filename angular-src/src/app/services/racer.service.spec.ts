import { TestBed, inject } from '@angular/core/testing';

import { RacerService } from './racer.service';

describe('RacerService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RacerService]
    });
  });

  it('should be created', inject([RacerService], (service: RacerService) => {
    expect(service).toBeTruthy();
  }));
});
