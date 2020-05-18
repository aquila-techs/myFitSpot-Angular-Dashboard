import { Component,OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService  } from "../services/authentication.service";

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


  user={name:"",email:"",password:"",referBy:""}


  constructor(private authSer: AuthenticationService,private router:Router) {}

  ngOnInit() {
    let names = [];
    this.authSer.getAllPartners().subscribe(async res=>{
      // console.log(res)
      this.partnersData = res.users;
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
    const partner = this.partnersData.find(e => { return e.name == item })
    this.user.referBy = partner._id;
  }

  onItemDeSelect(item: any) {
    this.user.referBy = ''
  }

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
