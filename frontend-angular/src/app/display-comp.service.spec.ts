import { TestBed, inject } from '@angular/core/testing';

import { DisplayCompService } from './display-comp.service';

describe('DisplayCompService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DisplayCompService]
    });
  });

  it('should be created', inject([DisplayCompService], (service: DisplayCompService) => {
    expect(service).toBeTruthy();
  }));
});
