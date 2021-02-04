import { Component, OnInit } from '@angular/core';
import { CompanyService } from '../services/company.service'

@Component({
  selector: 'app-amazon',
  templateUrl: './amazon.component.html',
  styleUrls: ['./amazon.component.css']
})
export class AmazonComponent implements OnInit {
  amazonData:any;
  constructor(private companyService:CompanyService) { }

  ngOnInit(): void {
    this.getCompany();
  }
  getCompany(){
    this.companyService.getAmazon().subscribe((res)=>{
      this.amazonData=res;
    })
  }

}
