import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router'

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private signUpURL = "http://localhost:3003/api/user/"
  private loginURL = "http://localhost:3003/api/auth"

  constructor(private http:HttpClient,
              private router : Router) { }

  signUpUser(user){
    return this.http.post<any>(this.signUpURL, user)
  }

  loginUser(user){
    return this.http.post<any>(this.loginURL,user)
  }

  isLogged(){
    return !!localStorage.getItem('token')
  }

  getToken(){
    return localStorage.getItem('token')
  }

  logOutUser(){
    this.router.navigate(['/login'])
    return localStorage.removeItem('token')
    
  }
}
