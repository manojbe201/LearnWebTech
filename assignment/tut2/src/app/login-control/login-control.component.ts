import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login-control',
  templateUrl: './login-control.component.html',
  styleUrls: ['./login-control.component.css']
})
export class LoginControlComponent implements OnInit {

  loginName = '';
  constructor() { }

  ngOnInit(): void {
  }

  getLogin(){
    return this.loginName.length>0 ? false : true;
  }
  loginEmpty(){
    this.loginName = "";
  }


}
