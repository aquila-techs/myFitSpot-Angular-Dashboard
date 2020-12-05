import { Component,OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService  } from "../services/authentication.service";
import { ToastrService } from 'ngx-toastr';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit{

  partners = [];
  partnersData = [];
  dropdownSettings = {};
  closeDropdownSelection = false;
  recaptchaKey = environment.recaptchaKey;
  captcha = false;

  user = { name: "", email: "", password: "", referBy: "" } as any;


  constructor(private authSer: AuthenticationService,private router:Router,private toastr:ToastrService) {}

  ngOnInit() {
    let names = [];

    this.authSer.getAllPartners().subscribe(async res=>{
      // console.log(res)
      this.partnersData = res.users;
      names.push('None');
     await res.users.forEach(element => {
       names.push(element.name) 
     });
      this.partners = names;
      // console.log('partners',this.partners)
    })

    this.dropdownSettings = {
      singleSelection: true,
      selectAllText: 'Select All',
      unSelectAllText: 'UnSelect All',
      allowSearchFilter: true,
      closeDropDownOnSelection: this.closeDropdownSelection
    };
    
    
    
  }

  onItemSelect(item: any) {
    // console.log(item);
  //  console.log  (this.partnersData.find(e=>{ return e.name == item}))
    // console.log('Item here', item);
    const partner = this.partnersData.find(e => { return e.name == item })
    this.user.referBy = partner._id;
  }

  onItemDeSelect(item: any) {
    this.user.referBy = ''
  }

  signup() {
    // if (this.captcha) {
      if (this.user.email && this.user.password) {
        if (this.user.referBy == "") {
          delete this.user.referBy;
        }
        // console.log(this.user)
        this.authSer.signup(this.user).subscribe(res => {
          // console.log(res);
          if (res.success == true) {
            this.router.navigate(['/activate/email']);          
          } else {
            this.toastr.error(res.message, "Oops!", { timeOut: 3000, closeButton: true, progressBar: true, progressAnimation: 'decreasing' });
  
          }
  
        })
      }
    // } else {
    //   this.toastr.error("Please Verify you are not robot by checking the recaptcha!", "Oops!", { timeOut: 3000, closeButton: true, progressBar: true, progressAnimation: 'decreasing' });
    // }
  
  }

  resolved(captchaResponse) {
    // console.log(`Resolved response token: ${captchaResponse}`);
    this.captcha = true;
    // this.authSer.verifyRecaptcha({ recaptcha: captchaResponse }).subscribe(res => {
    //   // console.log(res)
    //   if (res.status == true) {
    //     this.captcha = true;
    //   } else {
    //     this.toastr.error("Recaptcha Verification Failed!", "Oops!", { timeOut: 3000, closeButton: true, progressBar: true, progressAnimation: 'decreasing' });        
    //   }
    // })
  }

}
