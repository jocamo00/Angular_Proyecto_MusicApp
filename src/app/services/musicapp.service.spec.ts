import { TestBed } from '@angular/core/testing';

import { MusicappService } from './musicapp.service';

describe('MusicappService', () => {
  let service: MusicappService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MusicappService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
