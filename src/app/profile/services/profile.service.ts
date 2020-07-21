import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthHelperService } from 'src/app/services/authHelper.service'

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  constructor(private http: HttpClient,private authS:AuthHelperService) { }
  

  getUserDetails(): Observable<any> {
    let user = this.authS.currentUser;
    return this.http.get("/user/"+user._id);
  }

}
