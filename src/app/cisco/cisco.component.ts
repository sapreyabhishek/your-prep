import { Component, OnInit } from '@angular/core';
import { CompanyService } from '../services/company.service';

@Component({
  selector: 'app-cisco',
  templateUrl: './cisco.component.html',
  styleUrls: ['./cisco.component.css']
})
export class CiscoComponent implements OnInit {
  ciscoData;
  constructor(private companyService:CompanyService) { }

  ngOnInit(): void {
    this.getCompany();
  }
  getCompany(){
    this.companyService.getCisco().subscribe((res)=>{
      this.ciscoData=res;
    })
  }

}
