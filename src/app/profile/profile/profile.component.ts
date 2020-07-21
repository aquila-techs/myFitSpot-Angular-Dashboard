import { Component, OnInit } from '@angular/core';
import { ProfileService } from '../services/profile.service';
import { environment } from 'src/environments/environment';
import { BlogService } from '../../blog/services/blog.service'
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  userDetail;
  blogPosts;
  page = 1;
  totalPosts;
  imageUrl = environment.imgUrl;
  constructor(private profileS: ProfileService,private blogS:BlogService) { }

  ngOnInit(): void {
    this.profileS.getUserDetails().subscribe(res => {
      console.log(res);
      this.userDetail = res;
    })
    this.blogS.getUserPosts({}).subscribe(res => {
      console.log(res)
      if (res.status == true) {
        this.blogPosts = res.data;
        
        // console.log(this.blogPosts)
      }
    })
  }

}
