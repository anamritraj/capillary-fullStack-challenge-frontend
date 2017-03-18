import { Component, OnInit } from '@angular/core';
import {UserService} from "../services/user.service";
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [UserService]
})
export class LoginComponent implements OnInit {
  showLoginForm : boolean;
  showRegisterForm: boolean;
  registered: boolean;
  user: User;
  errors = [];

  constructor(
    private _userService: UserService,
    private _router: Router
  ) {
    this.showLoginForm = true;
    this.showRegisterForm = false;
    this.user = {
      name : "",
      password: "",
      email:""
    }
  }

  ngOnInit() {
    //Check for the valid token
    let storedToken:string = localStorage.getItem('user_token');
    //TODO: Validate token!
    //*************************************************************************************
    // If the token is valid! Due to time constraits not able to implement token validation.
    //*************************************************************************************
    if(storedToken){
      this._router.navigate(['games-list']);
    }
  }

  toggleLoginRegister(){
    this.showLoginForm = this.showRegisterForm;
    this.showRegisterForm = !this.showLoginForm;
  }

  registerClick(){
    this.errors=[];
    this._userService.register(this.user).subscribe(res =>{
      if(res.success){
        this.showRegisterForm = false;
        this.showLoginForm = true;
        this.registered = true;
      }else{
        this.errors = res.message.errorFields;
      }
    })
  }

  loginClick(){
    this.errors = [];
    this._userService.login(this.user).subscribe(res =>{
      console.log(res);
      if(res.success){
        localStorage.setItem('user_token', "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJlbWFpbCI6ImFuYW5kYW1yaXRyYWo5MDJAZ21haWwuY29tIiwiaWF0IjoxNDg5ODU5MjcwLCJleHAiOjE0ODk5NDU2NzB9.CTvRTtJ8A3qtR5VPR5RbFW2u_BCM6GLDYOsiTTODnhk")
        this._router.navigate(['/games-list']);
      }else{
        this.errors = [res.message];
      }
    })
  }
}

export interface User{
  name: string;
  email: string;
  password: string;
}
