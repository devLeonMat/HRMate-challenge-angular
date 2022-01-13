import { TestBed } from '@angular/core/testing';

import { BycicleService } from './bycicle.service';

describe('BycicleService', () => {
  let service: BycicleService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BycicleService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
