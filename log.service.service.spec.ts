import { TestBed, inject } from '@angular/core/testing';

import { LogService } from './log.service';

describe('Log.ServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [LogService]
    });
  });

  it('should be created', inject([LogService], (service: LogService) => {
    expect(service).toBeTruthy();
  }));
});
