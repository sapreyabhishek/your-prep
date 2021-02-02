import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { JwtHelperService } from "@auth0/angular-jwt";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  name:string
  constructor(private router:Router,private route:ActivatedRoute) {
    const token=localStorage.getItem('access_token');
    const helper = new JwtHelperService();
    let payload=helper.decodeToken(token); 
    let id=this.route.snapshot.paramMap.get('id');
    if(id!=payload.id){
      localStorage.removeItem('access_token');
      this.router.navigate(['/login']);
    }
    this.name=payload.name;
  }

  ngOnInit(): void {
  }

}
