import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RedirectService {

  constructor(private http: HttpClient) { }

  verifyUser(body): Observable<any> {
    return this.http.post('/user/verify', body);
  }
  resetPassword(body): Observable<any> {
    return this.http.post('/user/reset/password', body);
  }
}
