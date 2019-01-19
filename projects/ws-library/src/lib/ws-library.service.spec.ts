import { TestBed } from '@angular/core/testing';

import { WsLibraryService } from './ws-library.service';

describe('WsLibraryService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: WsLibraryService = TestBed.get(WsLibraryService);
    expect(service).toBeTruthy();
  });
});
