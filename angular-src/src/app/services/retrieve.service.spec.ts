import { TestBed, inject } from '@angular/core/testing';

import { RetrieveService } from './retrieve.service';

describe('RetrieveService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RetrieveService]
    });
  });

  it('should ...', inject([RetrieveService], (service: RetrieveService) => {
    expect(service).toBeTruthy();
  }));
});
