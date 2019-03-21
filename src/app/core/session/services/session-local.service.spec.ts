import { TestBed, inject } from '@angular/core/testing';

import { SessionLocalService } from './session-local.service';

describe('SessionLocalService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SessionLocalService]
    });
  });

  it('should be created', inject([SessionLocalService], (service: SessionLocalService) => {
    expect(service).toBeTruthy();
  }));
});
