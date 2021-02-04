import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { VaultService } from './vault.service';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http:HttpClient,private vault:VaultService) { }

  newUser(data){
    return this.http.post(this.vault.apiDomain+'/signup',data,{responseType:'text'});
  }

  loginUser(data){
    return this.http.post(this.vault.apiDomain+'/login',data,{responseType:'text'})
  }

  logout() {
    localStorage.removeItem('access_token');
    location.reload();
  }

  public get loggedIn(): boolean {
    return (localStorage.getItem('access_token') !== null);
  }
}
