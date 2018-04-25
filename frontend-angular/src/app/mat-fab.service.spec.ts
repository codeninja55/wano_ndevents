import { TestBed, inject } from '@angular/core/testing';

import { MatFabService } from './mat-fab.service';

describe('MatFabService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MatFabService]
    });
  });

  it('should be created', inject([MatFabService], (service: MatFabService) => {
    expect(service).toBeTruthy();
  }));
});
