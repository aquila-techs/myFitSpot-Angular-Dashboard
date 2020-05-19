import { RedirectService } from './../services/redirect.service';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-redirect-verification',
  templateUrl: './redirect-verification.component.html',
  styleUrls: ['./redirect-verification.component.css']
})
export class RedirectVerificationComponent implements OnInit {
  token;
  success = false;
  constructor(private actRout: ActivatedRoute, private redirectSer: RedirectService) { }

  ngOnInit() {

    this.token = this.actRout.snapshot.paramMap.get('userToken');
    if (this.token) {
      // console.log(this.token)
      this.redirectSer.verifyUser({ token: this.token }).subscribe(res => {
        console.log(res)
        if (res.success == true) {
          this.success = true;          
        }else{
          alert('Invalid Token!')
        }
      })
    } else {
      alert('Token Not Found!')
    }
  }

}
