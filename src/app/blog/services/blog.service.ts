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
  getSingleCategory(param): Observable<any> {
    return this.http.get("/categories/get/user/"+param);
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
  
  createPost(body, file:File): Observable<any> {

    let formData = new FormData();
    formData.append("postImage", file);
    formData.append("title", body.title);
    formData.append("description", body.description);
    formData.append("categories", JSON.stringify(body['categories']));
    formData.append("tags", JSON.stringify(body['tags']));
      return this.http.post("/post/create", formData);
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
