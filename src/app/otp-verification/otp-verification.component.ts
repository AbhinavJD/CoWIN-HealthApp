import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { AuthOtpService } from '../service/auth-otp.service';
import * as shajs from 'sha.js';

@Component({
  selector: 'app-otp-verification',
  templateUrl: './otp-verification.component.html',
  styleUrls: ['./otp-verification.component.styl']
})
export class OTPVerificationComponent implements OnInit, OnDestroy {
  constructor(private _authOTPService: AuthOtpService) { }
  public mobileNumber: number;
  public PostOTPSubscrription: Subscription
  public PostOTPVerifySubscrription: Subscription
  public txnId: object;
  public otpSend: boolean = false;
  public isOTPSent: boolean = false;
  public otp;
  ngOnInit(): void {
  }
  requestOtp(){
    this.PostOTPSubscrription = this._authOTPService.postOTPRequest({"mobile": this.mobileNumber}).subscribe(data => {
      if(data){
        console.log(data) // txnID
        this.txnId = data;
        this.isOTPSent = true;
      }
    },(err)=>{
      console.log('Enter Valid Mobile Numer: ', err)
    });
  }
  verifyOTP(){
    const HashedOTP = shajs('sha256').update(this.otp).digest('hex');
    this._authOTPService.postConfirmOTP({
      "otp": HashedOTP,
      "txnId": this.txnId
    }).subscribe(res => {
      console.log('OTP veryFied:', res)
    })
  }
  ngOnDestroy(){
    this.PostOTPSubscrription.unsubscribe();
    this.PostOTPVerifySubscrription.unsubscribe();
  }
}
