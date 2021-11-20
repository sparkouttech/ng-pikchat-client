import { TestBed } from '@angular/core/testing';

import { NgPikchatClientService } from './ng-pikchat-client.service';

describe('NgPikchatClientService', () => {
  let service: NgPikchatClientService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NgPikchatClientService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
