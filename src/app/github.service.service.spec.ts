import { TestBed } from '@angular/core/testing';

import { Github.ServiceService } from './github.service.service';

describe('Github.ServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: Github.ServiceService = TestBed.get(Github.ServiceService);
    expect(service).toBeTruthy();
  });
});
