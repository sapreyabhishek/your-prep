import { Component, OnInit } from '@angular/core';
import { CompanyService } from '../services/company.service';

@Component({
  selector: 'app-mathworks',
  templateUrl: './mathworks.component.html',
  styleUrls: ['./mathworks.component.css']
})
export class MathworksComponent implements OnInit {

  mathworksData:any;

  constructor(private companyService:CompanyService) { }

  ngOnInit(): void {
    this.getCompany();
  }
  getCompany(){
    this.companyService.getMathworks().subscribe((res)=>{
      this.mathworksData=res;
    })
  }
}
