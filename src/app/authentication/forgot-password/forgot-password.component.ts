import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';


//Services
import { AuthenticationService } from "../services/authentication.service";

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css']
})
export class ForgotPasswordComponent implements OnInit {

  body = { email: "" };

  constructor(private authSer:AuthenticationService, private toastr: ToastrService) { }

  ngOnInit(): void {
  }

  ForgetPassword() {
    this.authSer.forgetPassword(this.body).subscribe(res => {
      // console.log(res);
      if (res.success == true){
        this.toastr.success("Reset Password Link Send to your E-mail.", 'Success!', {timeOut: 3000,closeButton: true,progressBar:true,progressAnimation:'decreasing'});        
      } else {
        this.toastr.error(res.message, 'Oops!', { timeOut: 3000, closeButton: true, progressBar: true, progressAnimation: 'decreasing' });
      }
   })
  }

}
