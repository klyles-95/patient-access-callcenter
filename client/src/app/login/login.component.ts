import { Component, OnInit } from '@angular/core';
import { ModalDirective } from 'ngx-bootstrap/modal';
import { AuthService } from '../auth.service';
import { UserService } from '../user.service';
import { Router } from '@angular/router'


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})

export class LoginComponent implements OnInit {

  loginUserData = {}

  constructor(private _auth: AuthService,
              private _router: Router,
              private user:UserService) { }

  ngOnInit() {
  }

  // loginUser () {
  //   this._auth.loginUser(this.loginUserData)
  //   .subscribe(
  //     res => {
  //       localStorage.setItem('token', res.token)
  //       this._router.navigate(['/dashboard'])
  //     },
  //     err => console.log(err)
  //   ) 
  // }

  loginUser(e) {
  	e.preventDefault();
  	console.log(e);
  	var username = e.target.elements[0].value;
  	var password = e.target.elements[1].value;
  	
  	if(username == 'admin' && password == 'admin') {
      this.user.setUserLoggedIn();
      this._router.navigate(['dashboard']);
      console.log("LOGGED IN");
  	}
  }

}