import { TestBed } from '@angular/core/testing';

import { HttpmayriService } from './httpmayri.service';

describe('HttpmayriService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: HttpmayriService = TestBed.get(HttpmayriService);
    expect(service).toBeTruthy();
  });
});