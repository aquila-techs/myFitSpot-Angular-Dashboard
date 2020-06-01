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
    return this.http.put("/categories/update/" + param,body );
  }
  deleteUserCategory(param): Observable<any> {
    return this.http.delete("/categories/delete/" + param );
  }


  // Tags Services 
  
  creatTag(body): Observable<any> {
    return this.http.post("/tag/create", body);
  }
  getUserTags(): Observable<any> {
    return this.http.get("/tag/get/user");
  }
  getSingleTag(param): Observable<any> {
    return this.http.get("/tag/get/user/"+param);
  }
  updateUserTag(param,body): Observable<any> {
    return this.http.put("/tag/update/" + param,body );
  }
  deleteUserTag(param): Observable<any> {
    return this.http.delete("/tag/delete/" + param );
  }

    // Post Services 
  
    createPost(body): Observable<any> {
      return this.http.post("/post/create", body);
    }
    getUserPosts(body): Observable<any> {
      return this.http.post("/post/get/relatedTo/user",body);
    }
    updateUserPost(param,body): Observable<any> {
      return this.http.put("/post/update/" + param,body );
    }
    deleteUserPost(param): Observable<any> {
      return this.http.delete("/post/delete/" + param );
    }


}
