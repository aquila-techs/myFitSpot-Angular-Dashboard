import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: "root"
})
export class AuthenticationService {
  constructor(private http: HttpClient) {}

  login(body): Observable<any> {
    return this.http.post("/user/admin/login", body);
  }

  signup(body): Observable<any> {
    return this.http.post("/user/register", body);
  }

}
