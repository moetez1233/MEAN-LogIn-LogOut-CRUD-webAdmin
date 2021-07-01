import { Injectable } from '@angular/core';
import { userAuth } from './UserAuth';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';
@Injectable({
  providedIn: 'root'
})
export class SignInService {
  selectedUser: userAuth = {
    email: '',
    password: '',
    
  };

  constructor(private http:HttpClient) { }
  AuthUser(userAuth: userAuth){
    return this.http.post(environment.apiBaseUrl+'/Auth',userAuth);
  }
}
