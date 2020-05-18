import { Component, OnInit } from '@angular/core';

//Services
import { AuthenticationService } from "../services/authentication.service";

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css']
})
export class ForgotPasswordComponent implements OnInit {

  body = { email: "" };

  constructor(private authSer:AuthenticationService) { }

  ngOnInit(): void {
  }

  ForgetPassword() {
    this.authSer.forgetPassword(this.body).subscribe(res => {
      console.log(res);
    })
  }

}
