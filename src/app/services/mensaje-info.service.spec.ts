import { TestBed } from '@angular/core/testing';

import { MensajeInfoService } from './mensaje-info.service';

describe('MensajeInfoService', () => {
  let service: MensajeInfoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MensajeInfoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
