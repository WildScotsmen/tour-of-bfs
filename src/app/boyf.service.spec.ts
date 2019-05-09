import { TestBed } from '@angular/core/testing';

import { BoyfService } from './boyf.service';

describe('BoyfService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BoyfService = TestBed.get(BoyfService);
    expect(service).toBeTruthy();
  });
});
