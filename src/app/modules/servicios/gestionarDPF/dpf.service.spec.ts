import { TestBed } from '@angular/core/testing';

import { DpfService } from './dpf.service';

describe('DpfService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DpfService = TestBed.get(DpfService);
    expect(service).toBeTruthy();
  });
});
