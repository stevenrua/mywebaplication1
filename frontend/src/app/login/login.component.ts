import { Component, OnInit } from '@angular/core';
import { AuthService} from '../service/auth.service';
import { Router } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginUser = {

    email : "",
    password : ""

  }

  constructor(private auth:AuthService,
              private router:Router,
              private snackBar : MatSnackBar) { }

  ngOnInit(): void {
  }

  login(){
    this.auth.loginUser(this.loginUser)
      .subscribe(
        res=>{
          console.log(res)
          localStorage.setItem('token',res.jwtoken)
          this.router.navigate(['/tasks'])
        },
        err=>{
          console.log(err)
          if(err instanceof HttpErrorResponse){
            if(err.status === 400){
                this.snackBar.open("Credenciales Incorrectas",null,{
                  duration : 2000
                })
                this.router.navigate(['/login'])
            }
          }
        }
      )
  }

}
