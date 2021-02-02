import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import {NgForm} from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from '../services/login.service'

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  signin:boolean=true;
  constructor(private toastr:ToastrService,private router:Router,private loginService:LoginService) { }

  ngOnInit(): void {
  }
 async createUser(form:NgForm){
    let data=form.value;
    if(data.password!=data.repeat_password){
      setTimeout(() => {
        location.reload();
      }, 3000);
      this.toastr.error('Error Occured','Password does not match');
    }
    else{
      setTimeout(() => {
        this.router.navigate(['login']);        
      }, 2000);
      this.loginService.newUser(data).subscribe((res)=>{
        if(res['code']=="ER_DUP_ENTRY"){
          this.toastr.error('Error Occured','Email already exist');
          location.reload();
        }
        else{
          this.toastr.success('Success','User created');
        }
      });
    }
  }
}
