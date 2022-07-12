import { TestBed } from '@angular/core/testing';

import { scriptService } from './script.service';

describe('scriptService', () => {
  let service: scriptService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(scriptService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
