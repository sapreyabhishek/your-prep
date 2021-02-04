import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class VaultService {
  apiDomain:String;
  constructor() {
    this.apiDomain = "http://localhost:3000"
     //this.apiDomain = "https://yourprep-backend.herokuapp.com"
   }
}
