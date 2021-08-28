import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { AuthOtpService } from '../service/auth-otp.service';

@Component({
  selector: 'app-otp-verification',
  templateUrl: './otp-verification.component.html',
  styleUrls: ['./otp-verification.component.styl']
})
export class OTPVerificationComponent implements OnInit, OnDestroy {
  private mobileNumber: number;
  constructor(private _authOTPService: AuthOtpService) { }
  private PostOTPSubscrription: Subscription
  ngOnInit(): void {
  }
  requestOtp(){
    this._authOTPService.postOTPRequest({"mobile": this.mobileNumber}).subscribe(data => {
      console.log(data);
    })
  }
  ngOnDestroy(){
    this.PostOTPSubscrription.unsubscribe();
  }
}
