import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OTPVerificationComponent } from './otp-verification.component';

describe('OTPVerificationComponent', () => {
  let component: OTPVerificationComponent;
  let fixture: ComponentFixture<OTPVerificationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OTPVerificationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OTPVerificationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
