import { Component, OnInit } from '@angular/core';
import { LoginService } from '../services/login.service'
import {ToastrService} from 'ngx-toastr';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  name:string;
  email:string;
  comment:string;
  constructor(private loginService:LoginService,private toastr:ToastrService) { }

  ngOnInit(): void {
  }
  contactForm(){
    if(!this.name || !this.email || !this.comment){
      this.toastr.warning('filled the form correctly');
    }
    else{
    let data={name:this.name,email:this.email,comment:this.comment};
    this.loginService.newContactForm(data).subscribe((res)=>{
      if(JSON.parse(res).affectedRows==1){
        this.toastr.success('success','Contact form submitted successfully',{timeOut:2000});
      }
      else{
        this.toastr.error('error from server');
      }
    })
  }
      this.email="";
      this.comment="";
      this.name="";
  }
}
