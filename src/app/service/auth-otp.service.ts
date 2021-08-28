import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class AuthOtpService {

  constructor(private httpClientService: HttpClient) { }

  postOTPRequest(mobileNumberObj: object){
    return this.httpClientService.post("https://cdn-api.co-vin.in/api/v2/auth/public/generateOTP", mobileNumberObj)
  }
  postConfirmOTP(Obj: object){
    return this.httpClientService.post("https://cdn-api.co-vin.in/api/v2/auth/public/confirmOTP", Obj)
  }
}
