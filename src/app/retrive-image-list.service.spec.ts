import { TestBed, inject } from '@angular/core/testing';

import { RetriveImageListService } from './retrive-image-list.service';

describe('RetriveImageListService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RetriveImageListService]
    });
  });

  it('should be created', inject([RetriveImageListService], (service: RetriveImageListService) => {
    expect(service).toBeTruthy();
  }));
});
