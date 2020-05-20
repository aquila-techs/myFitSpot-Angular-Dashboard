import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '../services/authentication.service';
import { ToastrService } from 'ngx-toastr';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  body = {email: '',password: ''} 
  recaptchaKey = environment.recaptchaKey;
  captcha = false;
  constructor(private authSer: AuthenticationService,private router:Router,private toastr:ToastrService) { }
  
  login() {
    if (this.captcha) {
      if (this.body.email && this.body.password) {
        this.authSer.login(this.body).subscribe(res => {
          console.log(res);
          if (res.success == true) {
            localStorage.setItem('fat', res.token);
            this.router.navigate(['/']);          
          } else {
            this.toastr.error(res.message, "Oops!", { timeOut: 3000, closeButton: true, progressBar: true, progressAnimation: 'decreasing' });
          }
  
        })
      }  
    } else {
      this.toastr.error("Please Verify you are not robot by checking the recaptcha!", "Oops!", { timeOut: 3000, closeButton: true, progressBar: true, progressAnimation: 'decreasing' })
    }
    
  }

  resolved(captchaResponse) {
    console.log(`Resolved response token: ${captchaResponse}`);
    this.authSer.verifyRecaptcha({ recaptcha: captchaResponse }).subscribe(res => {
      console.log(res)
      if (res.status == true) {
        this.captcha = true;
      }
    })
  }


}
