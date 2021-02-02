import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../services/login.service'
import { JwtHelperService } from "@auth0/angular-jwt";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(public login:LoginService,private router:Router) { }

  ngOnInit(): void {
  }
  profile(){
    const token=localStorage.getItem('access_token');
    const helper = new JwtHelperService();
    let payload=helper.decodeToken(token);
    this.router.navigate(['/dashboard',payload.id])
  }
}
