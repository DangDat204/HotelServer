import { TestBed } from '@angular/core/testing';

import { UseStorageService } from './use-storage.service';

describe('UseStorageService', () => {
  let service: UseStorageService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UseStorageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
