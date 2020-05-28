import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BlogService {

  constructor(private http: HttpClient) { }
// Categories Services 
  
  creatCategory(body): Observable<any> {
    return this.http.post("/categories/create", body);
  }
  getUserCategories(): Observable<any> {
    return this.http.get("/categories/get");
  }
  updateUserCategory(param,body): Observable<any> {
    return this.http.get("/categories/update/" + param,body );
  }

}
