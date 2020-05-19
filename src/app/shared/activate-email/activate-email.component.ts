import { Component, OnInit } from '@angular/core';
import { Router,RouterLink } from '@angular/router';

@Component({
  selector: 'app-activate-email',
  templateUrl: './activate-email.component.html',
  styleUrls: ['./activate-email.component.css']
})
export class ActivateEmailComponent implements OnInit {

  constructor(private router:Router) { }


  ngOnInit(): void {
  }
  login() {
    this.router.navigate(['/login'])
  }

}
