import { TestBed } from '@angular/core/testing';

import { AuthOtpService } from './auth-otp.service';

describe('AuthOtpService', () => {
  let service: AuthOtpService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AuthOtpService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
