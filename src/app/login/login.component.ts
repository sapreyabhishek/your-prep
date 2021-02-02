import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import {NgForm} from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from '../services/login.service'
import { JwtHelperService } from "@auth0/angular-jwt";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private toastr:ToastrService,private router:Router,private loginService:LoginService) { }

  ngOnInit(): void {
  }

  login(form:NgForm){
    let data=form.value;
    setTimeout(() => {
      this.router.navigate(['login']);        
    }, 2000);
    this.loginService.loginUser(data).subscribe((res)=>{
      if(res==="user not exist"){
        setTimeout(() => {
          location.reload();
        }, 2000);
        this.toastr.error('Error Occured','User not exist');
      }
      else if(res==="Unauthorized"){
        setTimeout(() => {
          location.reload();
        }, 2000);
        this.toastr.error('Error Occured','Please enter the correct Credentials');
      }
      else{
        setTimeout(() => {
          const token=(JSON.parse(res)).token;
          localStorage.setItem('access_token', token);
          const helper = new JwtHelperService();
          let payload=helper.decodeToken(token);
          this.router.navigate(['/dashboard',payload.id]);
          
        }, 2000);
        this.toastr.success('Success','Login Successful');
      }
    });
  }
}
