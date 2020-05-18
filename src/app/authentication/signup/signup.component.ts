import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService  } from "../services/authentication.service";

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {

  user={name:"",email:"",password:"",age:"",bio:"",phone:""}


  constructor(private authSer: AuthenticationService,private router:Router) {}


  signup() {
    if (this.user.email && this.user.password) {
      this.authSer.signup(this.user).subscribe(res => {
        console.log(res);
        if (res.success == true) {
          this.router.navigate(['/login']);          
        } else {
          alert("Failed!")

        }

      })
    }
  }


}
