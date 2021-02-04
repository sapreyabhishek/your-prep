import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { VaultService } from './vault.service';

@Injectable({
  providedIn: 'root'
})
export class CompanyService {

  constructor(private http: HttpClient, private vault : VaultService) { }
  getAmazon(): Observable<any> {
    return this.http.get<any>( this.vault.apiDomain + '/company/amazon');
  }
}
