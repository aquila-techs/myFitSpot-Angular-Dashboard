import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class GoogleTranslateService {

  constructor(private http: HttpClient) { }
  
  translate(body): Observable<any> {
    return this.http.post("/translate", body);
  }

}
