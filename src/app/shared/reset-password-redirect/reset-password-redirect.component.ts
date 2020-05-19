import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { RedirectService } from '../services/redirect.service';

@Component({
  selector: 'app-reset-password-redirect',
  templateUrl: './reset-password-redirect.component.html',
  styleUrls: ['./reset-password-redirect.component.css']
})
export class ResetPasswordRedirectComponent implements OnInit {
  success = false;
  constructor(private redirectS: RedirectService, private actRout: ActivatedRoute) { }

  ngOnInit() {
    let token = this.actRout.snapshot.paramMap.get('userToken');
    if (token) {
      this.redirectS.resetPassword({ token: token }).subscribe(res => {
        if (res.success == true) {
          this.success = true;          
        } else {
          alert("Invalid Token")
        }

      })
    }
  }

}
