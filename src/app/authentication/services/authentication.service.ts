import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: "root"
})
export class AuthenticationService {
  constructor(private http: HttpClient) {}

  login(body): Observable<any> {
    return this.http.post("/user/partner/login", body);
  }

  signup(body): Observable<any> {
    return this.http.post("/user/register/partner", body);
  }

  forgetPassword(body): Observable<any> {
    return this.http.post("/user/send/reset/password/email", body);
  }

 verifyRecaptcha(body): Observable<any> {
    return this.http.post("/user/verify/recaptcha", body);
  }
  

  getAllPartners(): Observable<any> {
    return this.http.get("/user/all/partners");
  }

}
